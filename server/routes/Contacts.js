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
      const totalPosts = await Posts.count();
      res.status(200).json({ total: totalPosts });
    } catch (error) {
      console.error('Error fetching post count:', error);
      res.status(500).json({ error: 'An error occurred while fetching the post count.' });
    }
  });




module.exports =  router
