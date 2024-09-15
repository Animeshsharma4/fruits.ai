const express = require('express');
const router = express.Router();
const User = require('../models/login.js');






router.post('/', async (req, res) => {
    const { userId, password } = req.body;
  
    try {
      // Find user in the database
      const user = await User.findOne({ email: userId , password: password});
      if (!user) {
        return res.status(400).json({ success: false, message: 'User not found' });
      }
  
      // Compare password
      const isMatch = password;
      if (!isMatch) {
        return res.status(400).json({ success: false, message: 'Invalid password' });
      }
  
      // If credentials are valid, send success response
      res.json({ success: true, message: 'Login successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  });
  
  // API endpoint to handle user registration (for testing purposes)
  router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
  
    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ success: false, message: 'User already exists' });
      }
  
      // Hash the password
    //   const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({ email, password });
      await newUser.save();
  
      res.json({ success: true, message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  });

  module.exports=router;