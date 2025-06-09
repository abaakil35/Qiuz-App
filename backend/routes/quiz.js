const express = require('express');
const router = express.Router();
const Question = require('../models/Question');
const QuizHistory = require('../models/QuizHistory');
const { auth, adminAuth } = require('../middleware/auth');

// Start a new quiz
router.get('/start', auth, async (req, res) => {
  try {
    // Get random questions (limit to 10 for now)
    const questions = await Question.aggregate([
      { $sample: { size: 10 } },
      {
        $project: {
          question: 1,
          options: 1,
          category: 1,
          difficulty: 1,
          _id: 1
        }
      }
    ]);

    if (questions.length === 0) {
      return res.status(404).json({ error: 'No questions available' });
    }

    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Save quiz results
router.post('/history', auth, async (req, res) => {
  try {
    const { quizId, score, totalQuestions, answers } = req.body;

    const history = new QuizHistory({
      user: req.user._id,
      quiz: quizId,
      score,
      totalQuestions,
      answers
    });

    await history.save();
    res.status(201).json(history);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get user's quiz history
router.get('/history', auth, async (req, res) => {
  try {
    const history = await QuizHistory.find({ user: req.user._id })
      .populate('quiz', 'title')
      .sort({ date: -1 });

    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all quiz history (admin only)
router.get('/history/all', adminAuth, async (req, res) => {
  try {
    const history = await QuizHistory.find()
      .populate('user', 'username')
      .populate('quiz', 'title')
      .sort({ date: -1 });

    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;