const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  employee: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  description: {
    type: String,
    require: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);
