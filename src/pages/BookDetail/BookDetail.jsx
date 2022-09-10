import { useParams } from 'react-router-dom';
import { useState, useEffect  } from 'react';
import './bookDetail.css';


export default function BookDetail({ bookResults, addToShelf }) {
  const { bookId } = useParams();
  const [bookDetail, setBookDetail] = useState(null);
  console.log(bookResults);
  // const correctBook = books.find(b => console.log(b));
  useEffect(()=>{
    const correctBook = bookResults.find(b => b.id === bookId);
    setBookDetail(correctBook);
  }, [bookResults, bookId]);

  addToShelf(bookId);

  return (
        <div>
      {bookDetail && <img src={bookDetail.volumeInfo.imageLinks.thumbnail} alt="book cover"/> }
      {bookDetail && <p>{bookDetail.volumeInfo.averageRating}</p>}
      { bookDetail && <p>{bookDetail.volumeInfo.title}</p> }
      { bookDetail && <p>{bookDetail.volumeInfo.authors[0]} </p> }
      {bookDetail && <p>{bookDetail.volumeInfo.description}</p>}
      
      <p></p>
      <p></p> 
      <p>Hello</p>
      <button onClick={addToShelf}>Add To Shelf</button>
        </div>
  );
}