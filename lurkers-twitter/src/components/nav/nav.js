import React from 'react';

import { Link } from 'react-router-dom';

import './nav.css'

const Navbar = () => {
  return(
    <nav className='nav-container'>
    
      <div className="logo">
        <Link to='/'>Logo</Link>
      </div>
      
      <div className='search'>
        <Link to='search'>Search</Link>
      </div>

      <div className='random'>        
      <Link to='/random'>Random</Link>
      </div>

    </nav>
  )
};

export default Navbar;