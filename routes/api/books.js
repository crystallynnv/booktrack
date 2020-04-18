const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/books');

/*------------------------------ Public Routes ------------------------------*/



/*----------------------------- Protected Routes ----------------------------*/

// Process the token for only the routes below
router.use(require('../../config/auth'));
router.get('/', checkAuth, booksCtrl.index);
router.post('/', booksCtrl.createBook);
router.delete('/:id', booksCtrl.delete);
router.put('/:id', booksCtrl.update);

/*----------------------------- Helper Functions ----------------------------*/

function checkAuth(req, res, next) {
  console.log('checkAuth');
  if (req.user) return next();
  console.log('after if');
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
