import React, { Component } from 'react';
import SearchBox from '../../components/search-box/search-box';
import CardList from '../../components/card-list/card-list';



class SearchPage extends Component {
  constructor() {
  super();

  this.state = {
    searchField: '',
    twitterData: []
   }
  }

  onHandleChange = (e) => {
    this.setState({searchField:e.target.value})
    console.log(e.target.value)
  }

  onSubmitChange = () => {
    fetch('/search')
    .then(response => response.json())
    .then(tweets => this.setState({twitterData: tweets}))
      .catch(err => console.log(err));
  }

  
  render(){
  return(
    <div>
    <h1>Search Page</h1>
    <SearchBox handleChange={this.onHandleChange} submitChange={this.onSubmitChange}/>
    
    { this.state.twitterData.length ? <CardList twitterData={this.state.twitterData}/> :<h3>No results</h3> }

    </div>
  )
  }
}

export default SearchPage

