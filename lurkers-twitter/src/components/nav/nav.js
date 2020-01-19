import React from 'react';

import { Link } from 'react-router-dom';

import './nav.css'

const Navbar = () => {
  return(
    <nav className='nav-container'>
    
      <div className="logo">
        <Link className='button' to='/'>Home</Link>
      </div>
      
      <div className='search'>
        <Link className='button' to='search'>Search</Link>
      </div>

      <div className='random'>        
      <Link className='button' to='/random'>Comedians</Link>
      </div>

    </nav>
  )
};

export default Navbar;