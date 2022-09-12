import { Link } from 'react-router-dom';

export default function ShelfCard({book}) {
    
    return (
      <div className='book-card'>
        <Link to={`/shelf/${book._id}`}>
        {book.volumeInfo.title}
        <br/>
        {book.volumeInfo.subtitle}
        <br/>
        {book.volumeInfo.authors}
        <br/>
        </Link>
      </div>
    );
  }