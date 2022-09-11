import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='nav'>
       &#127798;<Link to='/profile'>Your Profile</Link>&#127798;
      <Link to='/find'>Find a book</Link>
      &#127798; Welcome {user.name}! &#127798; &nbsp;
      <Link to='' onClick={handleLogOut}>&nbsp;&nbsp;Log Out</Link>
    </nav>
  );
}