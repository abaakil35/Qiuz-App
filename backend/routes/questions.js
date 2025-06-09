const express = require('express');
const router = express.Router();
const Question = require('../models/Question');
const { adminAuth } = require('../middleware/auth');

// Get all questions (admin only)
router.get('/', adminAuth, async (req, res) => {
  try {
    const questions = await Question.find().sort({ createdAt: -1 });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new question (admin only)
router.post('/', adminAuth, async (req, res) => {
  try {
    const { question, options, correctAnswer, category, difficulty } = req.body;

    const newQuestion = new Question({
      question,
      options,
      correctAnswer,
      category,
      difficulty,
      createdBy: req.user._id
    });

    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update question (admin only)
router.put('/:id', adminAuth, async (req, res) => {
  try {
    const { question, options, correctAnswer, category, difficulty } = req.body;

    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      {
        question,
        options,
        correctAnswer,
        category,
        difficulty
      },
      { new: true, runValidators: true }
    );

    if (!updatedQuestion) {
      return res.status(404).json({ error: 'Question not found' });
    }

    res.json(updatedQuestion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete question (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);

    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    res.json({ message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;