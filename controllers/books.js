var Book = require('../models/book');

module.exports = {
  index,
  create
};

async function index(req, res) {
  try{
      const books = await Book.find({});
      res.status(200).json(books);
  }
  catch(err){
      res.status(500).json(err);
  }
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
