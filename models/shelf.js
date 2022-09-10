const mongoose = require('mongoose');
const user = require('./user');
const Schema = mongoose.Schema;

const userBookSchema = new Schema ({
    book: {type: Schema.Types.ObjectId, ref: 'Book'},
    currentlyReading: {
        type: Boolean, 
        default: false, 
        startDate: {type: Date}
        },
    completed: { 
        type: Boolean,
        default: false, 
        endDate: { type: Date }
        }
});



const bookshelfSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    userBooks: [userBookSchema],
}, {timestamps: true});


bookshelfSchema.statics.addBookToShelf = async function (bookId) {
    const shelf = this;
    const book = this.library.findOne(book => book._id.equals(bookId));
    if (book) {
        console.log(book, "addbook")
        console.log('bookshelf')
        return;
    } else {
        const book = await mongoose.model('Book').findById(bookId);
        shelf.library.push({ book });
    }
    return shelf.save();
};


module.exports = mongoose.model('Bookshelf', bookshelfSchema);