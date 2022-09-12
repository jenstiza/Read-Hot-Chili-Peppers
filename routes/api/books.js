const express = require('express');
const router = express.Router();
const bookCtrl = require('../../controllers/api/books');


router.get('/:word', bookCtrl.fetchBooks);
router.get('/find', bookCtrl.displayBooks);
router.post('/addbook', bookCtrl.addToShelf);
router.post('/:id', bookCtrl.bookResult);

module.exports = router;