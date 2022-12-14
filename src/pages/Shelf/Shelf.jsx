import './Shelf.css';
import ShelfCard from "../../components/ShelfCard/ShelfCard";



export default function Shelf({ bookShelf }) {
  
  const shelfCards = bookShelf.books.map((book) => 
    <ShelfCard 
      key={book._id} 
      book={book} 
      // user={userId}
     />
  );
  
  
  if (!bookShelf) return null;
  
  return (
    <div className='shelf-page'>
      <div className='shelf-header'>
        <h1>&nbsp;&#8595;&nbsp;Time for a little Shelf Indulgence&nbsp;&#8595;&nbsp;</h1>
      </div>
      <div className='container'>
        {shelfCards}
      </div>
    </div>
  );
}