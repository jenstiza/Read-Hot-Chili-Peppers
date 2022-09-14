import { useParams } from 'react-router-dom';
import { useState, useEffect  } from 'react';
import './bookDetailPage.css';
import { Link } from 'react-router-dom';


export default function BookDetail({ bookResults, addBook }) {
  const { bookId } = useParams();
  const [bookDetail, setBookDetail] = useState(null);
  
  useEffect(()=>{
    const correctBook = bookResults.find(b => b.id === bookId);
    setBookDetail(correctBook);
  }, [bookResults, bookId]);


  return (
    <div className='detail-page'>
    <div className='book-details'>
      {bookDetail && <img src={bookDetail.volumeInfo.imageLinks.thumbnail} alt="book cover" className='cover'/> }
      {bookDetail && <p>Average Chili Pepper Rating: {bookDetail.volumeInfo.averageRating} &#127798;</p>}
      {bookDetail && <p>Title: <br/> {bookDetail.volumeInfo.title}</p> }
      {bookDetail && <p> Author(s): <br/>{bookDetail.volumeInfo.authors[0]} </p> }
      {bookDetail && <p>Description: <br/> {bookDetail.volumeInfo.description}</p>}
      {bookDetail && <a href= {bookDetail.volumeInfo.previewLink}>Preview Here</a>}
      <Link to="/shelf"><button onClick={() => addBook(bookDetail)}>Add To Shelf</button></Link>
    </div>
    </div>   
  );
}