import { useEffect, useState } from "react";
import '../Shelf/Shelf.css';
import ShelfCard from "../../components/ShelfCard/ShelfCard";
import * as shelfAPI from "../../utilities/shelf-api";


export default function Shelf({ user }) {
  const [shelf, setShelf] = useState('hello I am a shelf');
  
 
  useEffect(function() {
    async function getBooks() {
      const updatedShelf = await shelfAPI.getShelf();
      console.log(updatedShelf, 'shelf');
      setShelf(updatedShelf);
      
    }
    getBooks();
  }, []);

  const myBooks = shelf.books;
  console.log(myBooks, 'my books');
  if(myBooks.length === 0){
    return
  } else {
    const shelfCards = myBooks.map((book, idx) => {
      return <ShelfCard 
      // key={book._id} 
      book={book} 
      user={user} />
     });
  }
  

    return (
      <div className='shelf-page'>
      <div className='shelf-header'><h1>&nbsp;Time for a little Shelf Indulgence&nbsp;</h1>
      </div>
      <div className='container'>
        {/* {shelfCards ? 
        {shelfCards}
         : 
        "noBooks"
        }  */}
       
      </div>
      </div>
    );
  }