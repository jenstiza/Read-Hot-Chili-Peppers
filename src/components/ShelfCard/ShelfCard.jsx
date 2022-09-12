import { Link } from 'react-router-dom';


export default function ShelfCard({book}) {
    
    return (
      <div className='book-card'>
        <Link to={`/shelf/${book._id}`}>
        {book.title}
        <br/>
        {book.cover}
        <br/>
        {book.author}
        <br/>
        {book.averageRating}
        </Link>
      </div>
    );
  }