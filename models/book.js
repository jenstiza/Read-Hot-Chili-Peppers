const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bookSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    author: [String],

    description: {
      type: String,
      required: true,
    },

    googleId: {
      type:String,
      required: true
    },

    cover: {
      type: String,

    },

    averageRating: {
      type:Number,
    }

    
  });
  
  module.exports = mongoose.model('Book', bookSchema);