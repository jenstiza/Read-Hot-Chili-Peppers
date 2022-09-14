import { Link } from 'react-router-dom';
import './ProfilePage.css';

export default function Profile() {

  return (
    <div className='profile'>
      <div className='shelf-btn'><Link to='/shelf'><img src='https://i.imgur.com/lseLJyX.gif' alt="shelf button" /></Link>
      </div>
    </div>
  );
}