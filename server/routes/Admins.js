const express = require('express');
const router  = express.Router()
const bcrypt = require('bcryptjs')
const { Admins } = require('../models')



router.post("/", async(req,res)=>{
  const {email,password} = req.body;
  bcrypt.hash(password,10).then((hash)=>{
    Admins.create({email:email,
        password:hash,
    })
 res.json("successful")
  });

});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the admin by email
      const admin = await Admins.findOne({ where: { email } });
  
      // Check if admin exists
      if (!admin) {
        return res.status(404).json({ error: "User doesn't exist" });
      }
  
      // Compare the provided password with the stored hashed password
      const match = await bcrypt.compare(password, admin.password);
  
      if (!match) {
        return res.status(400).json({ error: "Wrong email and password combination" });
      }
  
      // Successfully logged in
      return res.status(200).json({ message: "You logged in" });
  
    } catch (error) {
      console.error(error);
      // Handle server errors
      return res.status(500).json({ error: "Internal server error" });
    }
  });



module.exports =  router
