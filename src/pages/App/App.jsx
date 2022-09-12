import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import Profile from '../Profile/Profile';
import Find from '../Find/Find';
import NavBar from '../../components/NavBar/NavBar';
import Shelf from '../Shelf/Shelf';
import ShelfDetail from '../../components/ShelfDetail/ShelfDetail';
import './App.css';
import BookDetail from '../BookDetail/BookDetail';
import * as booksApi from '../../utilities/books-api';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [bookResults, setBookResults] = useState([]); 
  const [bookShelf, setBookShelf] = useState([]);
  async function getGoogleBooks(evt, search){
    evt.preventDefault()
    let results = await booksApi.fetchBooks(search);
    console.log(results);
    setBookResults(results);
  }


  async function addBook(bookId){
    let userBookShelf = await booksApi.addToShelf(bookId);
    setBookShelf(userBookShelf);
    }

  useEffect(()=>{
    async function getMyShelf(){
      const books = await booksApi.getShelf();
      setBookShelf(books)
    }
    if (user) getMyShelf();
  }, []);

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/' element={<Profile />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/find' element={<Find getGoogleBooks={getGoogleBooks} bookResults={bookResults} />} />
            <Route path='/find/:bookId' element={<BookDetail bookResults={bookResults} addBook={addBook}  />} /> 
            <Route path='/shelf' element={<Shelf bookShelf={bookShelf} />} />
            <Route path='/shelf/:bookId' element={<ShelfDetail bookShelf={bookShelf}  />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
