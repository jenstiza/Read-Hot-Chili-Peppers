import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as booksApi from '../../utilities/books-api';


export default function BookDetail({ books }) {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  // const [correctBook, setCorrectBook] = useState(null);
  useEffect(()=> {
    // if(!book) return
    async function getDetail(){
      const bookDeets = await booksApi.getBook(bookId);
       setBook(bookDeets);
      // console.log(bookDeets);
    }
    getDetail();
  }, [] )
  console.log(book);
  // const correctBook = books.find(b => console.log(b));
  const correctBook = books.find(b => b.volumeInfo.title === book && book.volumeInfo.title);
   console.log(correctBook);
  return (
        <div>
        {/* {book} */}
        </div>
  );
}