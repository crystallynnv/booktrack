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
    required: true
  },
  assigned: {
    type: String,
    default: 'Not Assigned'
  },
  completedDate: {
    type: String
  }, 
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);
