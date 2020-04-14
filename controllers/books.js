const Book = require('../models/book');

module.exports = {
  index,
  create,
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
  try{
      const books = await Book.find({});
      res.status(200).json(books);
  }
  catch(err){
      res.status(500).json(err);
  }
}
async function createBook(req, res) {
  const book = await Book.create(req.body);
  // user.books.push(req.body);
  res.status(201).json(book);
}

async function create(req, res) {
  console.log('user: ', req.user)
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  }
  catch(err){
    res.status(500).json(err);
  }
}
