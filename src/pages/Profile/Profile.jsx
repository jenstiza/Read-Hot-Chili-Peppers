import { Link } from 'react-router-dom';

export default function Profile() {



  return (
    <div className='profile'> 
      
      <Link to='/shelf'><div className='shelf-btn'><img src='https://i.imgur.com/lseLJyX.gif'/></div></Link>
    </div>
  
  );
}