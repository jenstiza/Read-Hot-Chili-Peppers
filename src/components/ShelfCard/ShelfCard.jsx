import './ShelfCard.css';

export default function ShelfCard({book}) {
    // console.log(book.title);
    console.log(book);
    return (
      <div className='shelf-card'>
        {book.title}
        <br/>
        <img src={book.cover} />
        <br/>
        {book.author}
        <br/>
        {book.averageRating}
      </div>
    );
  }