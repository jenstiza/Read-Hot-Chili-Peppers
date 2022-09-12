const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bookShelfSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId, 
        ref: "User"
      },
    books: [{type: Schema.Types.ObjectId, 
        ref: "Book"}],
    
  });
  
  module.exports = mongoose.model('BookShelf', bookShelfSchema);