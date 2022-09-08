import { Link } from 'react-router-dom';

export default function BookCard({book}) {
    
    return (
      <div className='book-card'>
        <Link to={`/find/${book.title}`}>
        {book.title}
        <br/>
        {book.subtitle}
        <br/>
        {book.authors}
        <br/>
        </Link>
      </div>
    );
  }