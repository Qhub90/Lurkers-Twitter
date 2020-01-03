import React, { Component } from 'react';
import SearchBox from '../../components/search-box/search-box';
import CardList from '../../components/card-list/card-list';



class SearchPage extends Component {
  constructor() {
  super();

  this.state = {
    searchField: '',
    twitterArray: [],
    data: null
   }
  }

  componentDidMount() {

    this.callBackendAPI()
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(tweets => this.setState({twitterArray: tweets}))
    .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
  
  render(){
  return(
    <div>
    <h1>Search Page</h1>
    <SearchBox />
    <p className="App-intro">{this.state.data}</p>

    </div>
  )
  }
}

export default SearchPage

//  <CardList twitterArray={this.state.twitterArray}/>.
