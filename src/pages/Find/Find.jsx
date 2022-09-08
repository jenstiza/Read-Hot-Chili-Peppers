export default function Find() {
  // function handleResponse(response) {
  //   for (var i = 0; i < response.items.length; i++) {
  //     var item = response.items[i];
  //     // in production code, item.text should have the HTML entities escaped.
  //     document.getElementById("content").innerHTML += "<br>" + item.volumeInfo.title;
  //   }
  // }
  return (
    <>
      <div className="find">
        <div className="find-header"><h1>Find your next great read!</h1></div>
        <br /><br />
        <br /><br />
        <br /><br />
        {/* <form action="/" method="GET">*/}
        <div>
          <input type="text" placeholder="Enter your book name" className="search" />
          <button type="submit" ><i className="fas fa-search"></i></button>
        </div>
        {/*</form> */}
      </div>
      {/* onSubmit={handleResponse} */}
       {/* <script async src="https://www.googleapis.com/books/v1/volumes?q=search+terms&key=%REACT_APP_GOOGLE_API_KEY%"></script> */}
    </>
  );
}