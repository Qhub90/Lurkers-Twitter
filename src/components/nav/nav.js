import React from 'react';

import './nav.css'

export const Navbar = () => {
  return(
    <nav className='nav-container'>
    
      <div className="logo">
        <h2>Logo</h2>
      </div>
      
      <div className='search'>
        <h2>Search</h2>
      </div>

      <div className='random'>        
      <h2>Random</h2>
      </div>

    </nav>
  )
};