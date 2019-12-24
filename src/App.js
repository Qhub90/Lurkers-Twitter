import React, { Component } from 'react';
import './App.css';

  import { Navbar } from './components/nav/nav';
  import { HomePage } from './components/homepage/homepage';
  import { CardList } from './components/card-list/card-list';
  import { SearchBox } from './components/search-box/search-box';


class App extends Component {
  constructor() {
    super();

    this.state = {
      searchField: '',
      twitterArray: []

    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(tweets => this.setState({twitterArray: tweets}))
  }

  render() {
    const {twitterArray, searchField} = this.state;
    const filteredArray = twitterArray.filter(user => 
      user.name.toLowerCase().includes(searchField.toLowerCase()))

      return (
        <div className="App">
          <Navbar />
          <SearchBox placeholder='Search' handleChange ={e => this.setState({searchField:e.target.value})}/>
          <CardList twitterArray={filteredArray} />            
        </div>
      );
    }
  }

export default App;
