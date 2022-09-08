import { useState } from 'react';
import * as booksApi from '../../utilities/books-api';
import SearchResults from '../../components/SearchResults/SearchResults';


export default function Find() {
  const [search, setSearch] = useState('');
  const [bookResults, setBookResults] = useState([]); 
 async function getBooks(evt){
  evt.preventDefault()
  let results = await booksApi.fetchBooks(search);
  console.log(results);
  setBookResults(results);
 }

function handleChange(evt){
 setSearch(evt.target.value)
}

// useEffect(()=> {
//   async function displayBooks() {
//     const allBooks = await booksApi.displayBooks()
//     setBookResults(allBooks)
//   }
//   displayBooks();
// }, [])

  return (
    <>
      <div className="find">
        <div className="find-header"><h1>Find your next great read!</h1></div>
        <br /><br />
        <br /><br />
        <br /><br />
        <form onSubmit={getBooks}>          
          <input type="text" placeholder="Enter your book name" className="search" value={search} onChange={handleChange} />
          <div className='magnify'>
          <button type="submit"><i className="fas fa-search"></i></button>
          </div>
          </form>
      </div>
      <SearchResults bookResults={bookResults}/>
    </>
  );
}