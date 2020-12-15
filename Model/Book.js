const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: [true, 'please add bookName field'],
    },
  },
  { timestamps: true }
);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
