const express = require('express');
const router = express.Router();

const {
  deleteBookById,
  getAllBooks,
  getBookById,
  updateBookById,
  createBook,
} = require('../controller/bookController');

router
  .route('/:id')
  .delete(deleteBookById)
  .put(updateBookById)
  .get(getBookById);
router.route('/').post(createBook).get(getAllBooks);

module.exports = router;
