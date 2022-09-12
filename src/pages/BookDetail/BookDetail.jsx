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

  // addToShelf(bookId);

  return (
        
          
        <div className='book-details'>
      {bookDetail && <img src={bookDetail.volumeInfo.imageLinks.thumbnail} alt="book cover" className='cover'/> }
      {bookDetail && <p>Average Rating: {bookDetail.volumeInfo.averageRating} &#127798;</p>}
      {bookDetail && <p>Title: {bookDetail.volumeInfo.title}</p> }
      {bookDetail && <p> Authors: {bookDetail.volumeInfo.authors[0]} </p> }
      {bookDetail && <p>Description: {bookDetail.volumeInfo.description}</p>}
      {bookDetail && <a href= {bookDetail.volumeInfo.previewLink}>Preview Here</a>}
      <p></p>
      <p></p> 
      <p></p>
      <button onClick={() => addToShelf(bookId)}>Add To Shelf</button>
        </div>
        
  );
}