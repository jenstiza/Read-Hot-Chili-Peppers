import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='nav'>
      <Link to='/profile'>Your Profile</Link>
      &nbsp; | &nbsp;
      <Link to='/find'>Find a book</Link>
      &nbsp; | &nbsp;
      Welcome Back, {user.name}!
      &nbsp; | &nbsp;
      <Link to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}