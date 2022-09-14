import './ShelfCard.css';


export default function ShelfCard({book}) {

  return (
    <div className='shelf-card'>
     <img src={book.cover} /> 
      <br/>
      Title: {book.title} 
      <br/>
      Author: {book.author}
      <br/>
      Average Chili Pepper Rating: {book.averageRating} &#127798;
      
    </div>
  );
}