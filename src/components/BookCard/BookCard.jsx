import { Link } from 'react-router-dom';

export default function BookCard({book}) {
    
    return (
      <div className='book-card'>
        <Link to={`/find/${book.id}`}>
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