const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path'); // Import path module
const { Events } = require('../models');

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

// Get all events
router.get('/', async (req, res) => {
  try {
    const listOfEvents = await Events.findAll();
    res.json(listOfEvents);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'An error occurred while fetching events.' });
  }
});

// Get an event by ID
router.get('/byId/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const event = await Events.findByPk(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    console.error('Error fetching event:', error);
    res.status(500).json({ error: 'An error occurred while fetching the event.' });
  }
});

// Create a new event with image upload
router.post('/', upload.single('image'), async (req, res) => {
  const { title, description, date, location } = req.body;
  const image = req.file ? req.file.filename : null; // If an image is uploaded, get the filename

  if (!title || !description || !date) {
    return res.status(400).json({ error: 'Title, description, and date are required.' });
  }

  try {
    const newEvent = await Events.create({ title, description, date, location, image });
    res.status(201).json(newEvent);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ error: 'An internal server error occurred.' });
  }
});

// Update an event by ID
router.put('/:id', upload.single('image'), async (req, res) => {
  const id = req.params.id;
  const { title, description, date, location } = req.body;
  const image = req.file ? req.file.filename : null; // Use the new image if uploaded

  try {
    const event = await Events.findByPk(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    event.title = title || event.title;
    event.description = description || event.description;
    event.date = date || event.date;
    event.location = location || event.location;
    event.image = image || event.image; // If image is uploaded, use it

    await event.save();
    res.status(200).json({ message: 'Event updated successfully', event });
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ message: 'Error updating event' });
  }
});

// Delete an event by ID
router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const event = await Events.findByPk(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    await event.destroy();
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ message: 'Error deleting event' });
  }
});

// Get the total count of events
router.get('/count', async (req, res) => {
  try {
    const totalEvents = await Events.count();
    res.status(200).json({ total: totalEvents });
  } catch (error) {
    console.error('Error fetching events count:', error);
    res.status(500).json({ error: 'An error occurred while fetching the events count.' });
  }
});

module.exports = router;
