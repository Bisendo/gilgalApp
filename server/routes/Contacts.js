const express = require('express');
const router  = express.Router()

const { Contacts } = require('../models')

router.get('/', async (req,res)=>{
const listOfPosts = await Contacts.findAll()
res.json(listOfPosts);
})

router.post('/', async (req, res) => {
  try {
    const { username, email, message, phoneNumber } = req.body;
    const contactData = { username, email, message, phoneNumber };
    const newContact = await Contacts.create(contactData);
    res.status(201).json(newContact);
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({ error: 'An error occurred while creating the contact.' });
  }
});
router.get('/count', async (req, res) => {
  try {
    // Using Sequelize's count method
    const count = await Contacts.count();  // Sequelize method for counting records
    res.json({ total: count });
  } catch (error) {
    console.error('Error fetching contacts count:', error);
    res.status(500).send('Error fetching contacts count');
  }
});


module.exports =  router
