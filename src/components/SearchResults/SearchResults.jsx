import BookCard from "../BookCard/BookCard";

export default function SearchResults({bookResults}) {
  const book = bookResults.map((b, idx) => <BookCard book = {b} />)

  return (
    <>
      <h1 className='results-header'>&nbsp;Here's What We Found: &nbsp;</h1>
      <div className='search-results'>
      <br/>
      <br/>
      {book}
      </div>
    </>
  );
}