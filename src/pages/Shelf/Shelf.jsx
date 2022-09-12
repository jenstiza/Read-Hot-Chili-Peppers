import ShelfCard from '../../components/ShelfCard/ShelfCard';
import './Shelf.css';

export default function Shelf({ bookShelf }) {
  const books = bookShelf.map(book =>
    <ShelfCard
      key={book._id}
      book={book}
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