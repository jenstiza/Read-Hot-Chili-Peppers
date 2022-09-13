import { useState } from 'react';
import SearchResults from '../../components/SearchResults/SearchResults';
import './Find.css';

export default function Find({getGoogleBooks, bookResults}) {
  const [searchWord, setSearchWord] = useState('');
  
  function handleChange(evt){
    setSearchWord(evt.target.value)
  }

  return (
    <>
      <div className="find">
        <div className="find-header"><h1>Find your next great read!</h1></div>
        <br /><br />
        <br /><br />
        <br /><br />
        <form onSubmit={(evt) => getGoogleBooks(evt,searchWord)}>          
          <input type="text" placeholder="Enter your book name" className="search" value={searchWord} onChange={handleChange} />
          <div className='magnify'>
          <button type="submit"><i className="fas fa-search"></i></button>
          </div>
        </form>
      </div>
      <SearchResults bookResults={bookResults}/>
    </>
  );
}