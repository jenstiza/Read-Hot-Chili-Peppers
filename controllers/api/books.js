const Book = require('../../models/book');
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();

module.exports = {
  fetchBooks,
  displayBooks,
  bookResult,
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
      console.log('hello');
      try {
            let results = await fetch(`https://www.googleapis.com/books/v1/volumes/${req.body.id}?key=${API_KEY}`, {
              method: 'GET'
            })
          const book = await results.json();
          console.log(book, 'book');
           res.json(book);
        } catch (err) {
          res.status(500).json(err);
        }
      } 




async function displayBooks(req,res) {
 const book = await Book.find({})
 res.json(book)
}