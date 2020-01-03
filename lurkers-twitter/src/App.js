import React from 'react';
import { Switch, Route } from 'react-router-dom';


import './App.css';

import Navbar from './components/nav/nav';

import HomePage from './pages/homePage/homePage';
import SearchPage from './pages/searchPage/searchPage';
import RandomPage from './pages/randomPage/randomPage';

// import SearchBox from './components/search-box/search-box';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/search' component={SearchPage} />
        <Route  path='/random' component={RandomPage} />
      </Switch>
                  
    </div>
  );
}
  

  

  

    // const {twitterArray, searchField} = this.state;
    // const filteredArray = twitterArray.filter(user => 
    //   user.name.toLowerCase().includes(searchField.toLowerCase()))

      
  

export default App;
