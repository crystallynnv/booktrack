const Book = require('../models/book');

module.exports = {
  index,
  createBook,
  delete: deleteOne,
  update
};

async function update(req, res) {
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedBook);
}

async function deleteOne(req, res) {
  const deletedBook = await Book.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedBook);
}

async function index(req, res) {
  const books = await Book.find({user: req.user.id});
  res.status(200).json(books);

}
async function createBook(req, res) {
  req.body.user = req.user._id
  const book = await Book.create(req.body);
  res.status(201).json(book);
}


