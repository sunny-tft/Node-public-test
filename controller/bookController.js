const Book = require('../Model/Book');
const ObjectId = require('mongoose').Types.ObjectId;
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).send({
      success: true,
      code: 200,
      count: books.length,
      books: books,
    });
  } catch (error) {
    res.status(500).send({ error });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({
        success: false,
        code: 400,
        error: {
          level: 'warning',
          msg: 'not valid id',
        },
      });
    }
    const book = await Book.findById(id);
    if (!book)
      return res.status(400).json({
        success: false,
        code: 400,
        message: 'no book exist with this id',
      });
    res.status(200).json({
      success: true,
      code: 200,
      book: book,
    });
  } catch (error) {
    res.status(500).send({ error });
  }
};

const updateBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const { bookName } = req.body;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({
        success: false,
        code: 400,
        error: {
          level: 'warning',
          msg: 'not valid id',
        },
      });
    } else if (!bookName) {
      return res.status(400).send({
        success: false,
        code: 400,
        error: 'please add bookName field',
      });
    }
    const book = await Book.findByIdAndUpdate(
      id,
      {
        bookName,
      },
      { timestamps: true, new: true }
    );
    if (!book)
      return res.status(400).json({
        success: false,
        code: 400,
        message: 'book not found with this id',
      });
    res.status(200).json({
      success: true,
      code: 200,
      message: 'book updated successfully',
      book,
    });
  } catch (error) {}
};

const deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book)
      return res.status(400).json({
        success: false,
        code: 400,
        message: 'book not found with this id',
      });
    res.status(200).json({
      success: true,
      code: 200,
      message: 'book deleted successfully',
      book: {},
    });
  } catch (error) {}
};

const createBook = async (req, res) => {
  const { bookName } = req.body;
  const book = new Book({
    bookName,
  });
  await book.save();
  res.status(201).json({
    success: true,
    code: 201,
    book,
  });
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
};
