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
        <div className="find-header"><h1>&nbsp;Find your next great read!</h1></div>
        <br /><br />
        <br /><br />
        <br /><br />
        <form onSubmit={(evt) => getGoogleBooks(evt,searchWord)}>          
          <input type="text" placeholder="Enter your book name and then click the magnifying glass" className="search" value={searchWord} onChange={handleChange} />
          <div className='magnify'>
          <button type="submit"><i className="fas fa-search"></i></button>
          </div>
        </form>
        <br/>
        <h1 className='instructions'>&nbsp;&#8595;&nbsp;After Hitting the magnifying glass, scroll down for results!&nbsp;&#8595;&nbsp;</h1>
      </div>
      <SearchResults bookResults={bookResults}/>
    </>
  );
}