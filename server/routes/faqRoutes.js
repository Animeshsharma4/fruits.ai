const express = require('express');
const router = express.Router();
const Faq = require('../models/Faq');

// @route   GET /api/faqs
// @desc    Get all FAQs
// @access  Public
router.get('/', async (req, res) => {
  try {
    // const faqs = await Faq.find().limit(5);
    console.log("hi");
    res.json({"helo 8767":"he"});

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   POST /api/faqs
// @desc    Add a new FAQ
// @access  Public (You can change this to protected if needed)
router.post('/', async (req, res) => {
  const { question, answer } = req.body;

  if (!question || !answer) {
    return res.status(400).json({ message: 'Question and Answer are required' });
  }

  const newFaq = new Faq({
    question,
    answer,
  });

  try {
    const savedFaq = await newFaq.save();
    res.status(201).json(savedFaq);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @route   GET /api/faqs/:id
// @desc    Get a specific FAQ by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const faq = await Faq.findById(req.params.id);
    if (!faq) {
      return res.status(404).json({ message: 'FAQ not found' });
    }
    res.json(faq);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   PUT /api/faqs/:id
// @desc    Update an FAQ by ID
// @access  Public (You can change this to protected if needed)
router.put('/:id', async (req, res) => {
  const { question, answer } = req.body;

  try {
    const faq = await Faq.findById(req.params.id);
    if (!faq) {
      return res.status(404).json({ message: 'FAQ not found' });
    }

    faq.question = question || faq.question;
    faq.answer = answer || faq.answer;

    const updatedFaq = await faq.save();
    res.json(updatedFaq);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   DELETE /api/faqs/:id
// @desc    Delete an FAQ by ID
// @access  Public (You can change this to protected if needed)
router.delete('/:id', async (req, res) => {
  try {
    const faq1 = await Faq.findById(req.params.id);
    // console.log(faq);
    if (!faq1) {
      return res.status(404).json({ message: 'FAQ not found' });
    }

     await Faq.deleteOne({ _id: faq1 });;
   
      const faqs = await Faq.find();
      console.log(faqs);
      res.json(faqs);
  
    
    // res.json({ message: 'FAQ deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
