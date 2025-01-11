const express = require("express");
const multer = require("multer");
const path = require("path");
const { Services } = require("../models");
const router = express.Router();

// Set up multer storage for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Define the upload folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Create a unique filename
  },
});

// File filter to allow only image files
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

const upload = multer({ storage, fileFilter });

// Get all services
router.get("/", async (req, res) => {
  try {
    const services = await Services.findAll();
    res.json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ error: "An error occurred while fetching services." });
  }
});

// Get a service by ID
router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const service = await Services.findByPk(id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  } catch (error) {
    console.error("Error fetching service:", error);
    res.status(500).json({ error: "An error occurred while fetching the service." });
  }
});

// Create a new service with image upload
router.post("/", upload.single("image"), async (req, res) => {
  const { title, description } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null; // Create image URL if an image is uploaded

  if (!title || !description) {
    return res.status(400).json({ error: "Title and description are required." });
  }

  try {
    const newService = await Services.create({
      title,
      description,
      image: imageUrl, // Save image URL to the database
    });
    res.status(201).json(newService); // Return the created service
  } catch (error) {
    console.error("Error creating service:", error);
    res.status(500).json({ error: "Failed to create service" });
  }
});

// Update a service by ID with image upload
router.put("/:id", upload.single("image"), async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null; // Use the new image if uploaded

  try {
    const service = await Services.findByPk(id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    service.title = title || service.title;
    service.description = description || service.description;
    service.imageUrl = imageUrl || service.imageUrl; // Update image URL if a new image is uploaded

    await service.save();
    res.status(200).json({ message: "Service updated successfully", service });
  } catch (error) {
    console.error("Error updating service:", error);
    res.status(500).json({ error: "Failed to update service" });
  }
});


// Delete a service by ID
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const service = await Services.findByPk(id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    await service.destroy();
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error("Error deleting service:", error);
    res.status(500).json({ error: "Failed to delete service" });
  }
});





// Get the total count of services
router.get("/count", async (req, res) => {
  try {
    const totalServices = await Services.count();
    res.status(200).json({ total: totalServices });
  } catch (error) {
    console.error("Error fetching services count:", error);
    res.status(500).json({ error: "An error occurred while fetching the services count." });
  }
});

module.exports = router;
