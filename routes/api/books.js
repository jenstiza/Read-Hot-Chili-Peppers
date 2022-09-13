const express = require('express');
const router = express.Router();
const bookCtrl = require('../../controllers/api/books');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/:word', ensureLoggedIn, bookCtrl.fetchBooks);
router.get('/find',  ensureLoggedIn, bookCtrl.displayBooks);
router.post('/addbook', ensureLoggedIn, bookCtrl.addToShelf);
router.post('/:id', ensureLoggedIn, bookCtrl.bookResult);


module.exports = router;