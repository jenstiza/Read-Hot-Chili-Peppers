import BookDetail from '../BookDetail/BookDetail';
import './Shelf.css';

export default function Shelf({ bookId, addToShelf }) {
  const books = bookId.map(book =>
    <BookDetail
      key={book}
      bookDetail={book}
      addToShelf={addToShelf}
    />
  );


    return (
      <div className='shelf-page'>
      <div className='shelf-header'><h1>&nbsp;Time for a little Shelf Indulgence&nbsp;</h1>
      {books}
      </div>
      </div>
    );
  }