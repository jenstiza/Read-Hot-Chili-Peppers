import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='nav'>
      <Link to='/profile'> &#127798; Your Profile  &#127798;</Link>
      <Link to='/find'> &#127798; Find a book  &#127798;</Link>
      &#127798; Welcome {user.name}! &#127798; &nbsp;
      <Link to='' onClick={handleLogOut} >&nbsp;&nbsp;&nbsp;&#127798; Log Out &#127798;</Link>
    </nav>
  );
}