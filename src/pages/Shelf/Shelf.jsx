import { useEffect, useState } from "react";
import '../Shelf/Shelf.css';
import ShelfCard from "../../components/ShelfCard/ShelfCard";
import * as shelfAPI from "../../utilities/shelf-api";


export default function Shelf({ bookShelf }) {

 
  const shelfCards = bookShelf.books.map((book) => 
    <ShelfCard 
      key={book._id} 
      book={book} 
     />
   );
  

   return (
    <div className='shelf-page'>
      <div className='shelf-header'>
        <h1>&nbsp;Time for a little Shelf Indulgence&nbsp;</h1>
      </div>
      <div className='container'>
        {shelfCards}
      </div>
    </div>
  );
}