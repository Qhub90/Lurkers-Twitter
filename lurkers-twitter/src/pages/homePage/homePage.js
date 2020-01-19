import React from 'react';

import { Link } from 'react-router-dom';

import './homePage.css'

const HomePage = () => {
  return(
    <div className='home-container'>

        <div className='title'>
          <h1>Lurker</h1>
        </div>

        <div className='main-content'>
          <h3>Welcome to Lurker, a place where you can view tweets without creating an account</h3>
          <p>Look up your own tweets or check out my favorite comedians</p>
        </div>


      <div className='buttons'>
      <Link className='homeButton' to='search'>Search</Link>
      <Link className='homeButton' to='/random'>Comedians</Link>
      </div>
      
    </div>

  )
}

export default HomePage;