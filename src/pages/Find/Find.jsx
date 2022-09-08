export default function Find() {
  return (
    <>
    <div className="find">
      <div className="find-header"><h1>Find your next great read!</h1></div>
        <br/><br/>
        <br/><br/>
        <br/><br/>
       {/* <form action="/" method="GET">*/}
        <div>
        <input type="text" placeholder="Enter your book name" className="search"  />
        <button><i className="fas fa-search"></i></button>
        </div>
        {/*</form> */}
      </div>
    </>
  );
}