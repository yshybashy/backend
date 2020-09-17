const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({

  winner: {
    type: String,
    minlength: 3,
    maxlength: 100
  },
  history: {
    type: Array,
  },
  squares: {
    type: Array,
  }
})

mongoose.model("Game", GameSchema);