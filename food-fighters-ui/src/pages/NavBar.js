import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import ffLogo from '../assets/logos/ff-logo.png'
import './NavBar.css';

// Navigation bar component
export default function NavBar() {
  const [active, setActive] = useState('Home');

  return (
    <div className='navBar'>
      <Link to='/'>
        <button className='btn' id='ffLogoBtn'>
          <img 
              id='ffLogo' src={ffLogo} alt='FF Logo' 
              onClick={() => setActive('Home')}
          />
        </button>
      </Link>

      <div id='navPaths'>
        <Link to='/'>
          <button 
              className={`btn navBtn ${active === 'Home' ? 'activeBtn' : ''}`}
            onClick={() => setActive('Home')}
          >Home</button>
        </Link>

        <Link to='/Add'>
          <button 
              className={`btn navBtn ${active === 'Add' ? 'activeBtn' : ''}`}
              onClick={() => setActive('Add')}
          >Add</button>
        </Link>

        <Link to='/List'>
          <button 
              className={`btn navBtn ${active === 'List' ? 'activeBtn' : ''}`}
              onClick={() => setActive('List')}
          >List</button>
        </Link>

        <Link to='/AboutUs'>
          <button 
              className={`btn navBtn ${active === 'AboutUs' ? 'activeBtn' : ''}`}
              onClick={() => setActive('AboutUs')}
          >About Us</button>
        </Link>
        
      </div>
    </div>
  );
};
