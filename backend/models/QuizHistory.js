const mongoose = require('mongoose');

const quizHistorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  },
  answers: [{
    type: Number
  }],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('QuizHistory', quizHistorySchema);