import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShelfCard from '../ShelfCard/ShelfCard';
import Shelf from '../../pages/Shelf/Shelf';




export default function ShelfDetail({ bookShelf }){

    const { bookId } = useParams();
    const [bookDetail, setBookDetail] = useState(null);

    useEffect(()=>{
      const correctBook = bookShelf.find(b => b._id === bookId);
      setBookDetail(correctBook);
    }, [bookShelf, bookId]);

return <h1>Shelf Detail</h1>    
}

