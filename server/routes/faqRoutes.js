const express = require('express');
const router = express.Router();
const Faq = require('../models/Faq');

// Get all FAQs
router.get('/', async (req, res) => {
  const faqs = await Faq.find();
  res.json(faqs);
});

// Get FAQ by ID
router.get('/:id', async (req, res) => {
  const faq = await Faq.findById(req.params.id);
  if (!faq) {
    return res.status(404).json({ message: 'FAQ not found' });
  }
  res.json(faq);
});

// Create FAQ
router.post('/', async (req, res) => {
  const faq = new Faq({
    question: req.body.question,
    answer: req.body.answer
  });
  await faq.save();
  res.status(201).json(faq);
});

// Update FAQ
router.put('/:id', async (req, res) => {
  const faq = await Faq.findById(req.params.id);
  if (!faq) {
    return res.status(404).json({ message: 'FAQ not found' });
  }
  faq.question = req.body.question || faq.question;
  faq.answer = req.body.answer || faq.answer;
  await faq.save();
  res.json(faq);
});

// Delete FAQ
router.delete('/:id', async (req, res) => {
  const faq = await Faq.findById(req.params.id);
  if (!faq) {
    return res.status(404).json({ message: 'FAQ not found' });
  }
  await faq.remove();
  res.json({ message: 'FAQ deleted' });
});

module.exports = router;
