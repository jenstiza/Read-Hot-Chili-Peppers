const Book = require('../../models/book');
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const Bookshelf = require('../../models/bookShelf');

module.exports = {
  fetchBooks,
  displayBooks,
  bookResult,
  addToShelf,
};

async function fetchBooks(req, res){
    let query = req.params.word;
    try {
         let results = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=25&key=${API_KEY}`, {
          method: 'GET'
          })
        const books = await results.json();
         res.json(books.items);
      } catch (err) {
        res.status(500).json(err);
      }
    } 

    async function bookResult(req, res){
      try {
            let results = await fetch(`https://www.googleapis.com/books/v1/volumes/${req.body.id}?key=${API_KEY}`, {
              method: 'GET'
            })
          const book = await results.json();
           res.json(book);
        } catch (err) {
          res.status(500).json(err);
        }
      } 

      async function addToShelf(req, res) {
        console.log('addToShelf', req.body.id);
         const bookInDb = await Book.findOne({googleId: req.body.id}) 
         console.log(bookInDb, 'book database');
         const bookShelf = await Bookshelf.findOne({userId: req.user._id}) 
        if(bookInDb){
          await bookShelf.books.push(bookInDb._id);
          await bookShelf.save();
          const shelf = await Bookshelf.findOne({userId: req.user._id}).populate('books').exec();
          res.json(shelf);
          } else {
            const formattedBook = {
              title: req.body.volumeInfo.title,
              author: req.body.volumeInfo.authors,
              description: req.body.volumeInfo.description,
              googleId: req.body.id,
              cover: req.body.volumeInfo.imageLinks.smallThumbnail,
              averageRating: req.body.volumeInfo.averageRating,
            } 
           let newBook = await Book.create(formattedBook);
           await bookShelf.books.push(newBook._id);
           await bookShelf.save();
           const shelf = await Bookshelf.findOne({userId: req.user._id}).populate('books').exec();
           console.log(bookShelf);
          res.json(shelf);
            
          }

      }



async function displayBooks(req,res) {
 const book = await Book.find({})
 res.json(book)
}