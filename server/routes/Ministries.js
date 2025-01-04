const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path'); // Import path module
const { Ministries } = require('../models');

// Set up multer storage for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Define the upload folder (you might need to create it)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Create a unique filename
  },
});

// File filter to only allow image files
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

const upload = multer({ storage, fileFilter });

// Get all ministries
router.get('/', async (req, res) => {
  try {
    const listOfMinistries = await Ministries.findAll();
    res.json(listOfMinistries);
  } catch (error) {
    console.error('Error fetching ministries:', error);
    res.status(500).json({ error: 'An error occurred while fetching ministries.' });
  }
});

// Get a ministry by ID
router.get('/byId/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const ministry = await Ministries.findByPk(id);
    if (!ministry) {
      return res.status(404).json({ message: 'Ministry not found' });
    }
    res.json(ministry);
  } catch (error) {
    console.error('Error fetching ministry:', error);
    res.status(500).json({ error: 'An error occurred while fetching the ministry.' });
  }
});

// Create a new ministry with image upload
router.post("/", upload.single('image'), async (req, res) => {
  const { name, description } = req.body;
  const image = req.file ? req.file.filename : null; // If an image is uploaded, get the filename

  if (!name || !description) {
    return res.status(400).json({ error: "Name and description are required." });
  }

  try {
    const newMinistry = await Ministries.create({ name, description, image });
    res.status(201).json(newMinistry);
  } catch (error) {
    console.error("Error creating ministry:", error);
    res.status(500).json({ error: "An internal server error occurred." });
  }
});

// Update a ministry by ID
router.put('/:id', upload.single('image'), async (req, res) => {
  const id = req.params.id;
  const { name, description } = req.body;
  const image = req.file ? req.file.filename : null; // Use the new image if uploaded

  try {
    const ministry = await Ministries.findByPk(id);
    if (!ministry) {
      return res.status(404).json({ message: 'Ministry not found' });
    }

    ministry.name = name || ministry.name;
    ministry.description = description || ministry.description;
    ministry.image = image || ministry.image; // If image is uploaded, use it

    await ministry.save();
    res.status(200).json({ message: 'Ministry updated successfully', ministry });
  } catch (error) {
    console.error('Error updating ministry:', error);
    res.status(500).json({ message: 'Error updating ministry' });
  }
});

// Delete a ministry by ID
router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const ministry = await Ministries.findByPk(id);
    if (!ministry) {
      return res.status(404).json({ message: 'Ministry not found' });
    }

    await ministry.destroy();
    res.status(200).json({ message: 'Ministry deleted successfully' });
  } catch (error) {
    console.error('Error deleting ministry:', error);
    res.status(500).json({ message: 'Error deleting ministry' });
  }
});

// Get the total count of ministries
router.get('/count', async (req, res) => {
  try {
    const totalMinistries = await Ministries.count();
    res.status(200).json({ total: totalMinistries });
  } catch (error) {
    console.error('Error fetching ministries count:', error);
    res.status(500).json({ error: 'An error occurred while fetching the ministries count.' });
  }
});

module.exports = router;
