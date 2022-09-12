import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  
  return (
    <div className='auth-page'>
      <h1 className='login-header'>&#127798;&nbsp;Welcome to Read Hot Chili Peppers! &#127798;<br /><br /><br />&#128366;&nbsp;Find and add new books to your to be read - for a little shelf indulgence&nbsp;&#128366;<br /><br /><br />&#127798;Login or Sign Up to get started!&nbsp;&#127798;</h1>
      <button className="sign-up" onClick={() => setShowLogin(!showLogin)}>{showLogin ? '🌶️Sign Up🌶️' : '🌶️Log In🌶️'}
      </button>
      { showLogin ?
          <LoginForm setUser={setUser} />
          :
          <SignUpForm setUser={setUser} />
      }
    </div>
  );
}