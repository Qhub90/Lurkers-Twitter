import React, { Component } from 'react';
import './App.css';

  import { Navbar } from './components/nav/nav';
  import { HomePage } from './components/homepage/homepage';
  import { CardList } from './components/card-list/card-list';


class App extends Component {
  constructor() {
    super();

    this.state = {
      search: 'Hello',
      twitterArray: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(tweets => this.setState({twitterArray: tweets}))
  }

  render() {
      return (
        <div className="App">
          <Navbar />
          <CardList>
            {this.state.twitterArray.map(tweet => (
              <h1 key={tweet.id}> {tweet.name}</h1>
            ))}
          </CardList>
        </div>
      );
    }
  }

export default App;
