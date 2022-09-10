import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import Profile from '../Profile/Profile';
import Find from '../Find/Find';
import NavBar from '../../components/NavBar/NavBar';
import Shelf from '../Shelf/Shelf';
import './App.css';
import BookDetail from '../BookDetail/BookDetail';
import * as booksApi from '../../utilities/books-api';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [books, setBooks] = useState([]);
  async function getBooks(evt, search){
  evt.preventDefault()
  let results = await booksApi.fetchBooks(search);
  console.log(results);
  setBooks(results);
  }

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/' element={<Profile />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/find' element={<Find getBooks={getBooks} books={books} />} />
            <Route path='/find/:bookId' element={<BookDetail books={books} />} /> 
            {/* books={displayBooks} */}
            <Route path='/shelf' element={<Shelf />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
