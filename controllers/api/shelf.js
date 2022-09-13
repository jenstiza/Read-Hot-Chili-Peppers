const Book = require('../../models/book');
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const Bookshelf = require('../../models/bookShelf');

module.exports = {
  getAll,
};


async function getAll(req,res) {
    const shelf = await Bookshelf.findOne({userId: req.user._id})
    res.json(shelf)
   }