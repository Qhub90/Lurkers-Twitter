import React, { Component } from "react";
import SearchForm from "../../components/search-form/search-form";
import CardList from "../../components/card-list/card-list";

import "./searchPage.css";

import axios from "axios";

class SearchPage extends Component {
  constructor() {
    super();

    this.state = {
      user: "",
      tweet: "",
      message:'',
      twitterData: []
    };
  }

  // componentDidMount() {
  //   axios
  //       .post("/search/users")
  //       .then(response =>
  //         this.setState({ twitterData: response.data.statuses })
  //       )
  //       .catch(err => console.log(err));
  // }

  onHandleChange = event => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  onSubmitChange = event => {
    event.preventDefault();

    event.target.reset();

    let { user, tweet } = this.state;

    if (tweet.length > 2) {
      axios
        .post("/search/tweets", { tweet })
        .then(response => this.setState({ twitterData: response.data.statuses }))
        .catch(err => console.log(err));
    }

    if (user.length > 2) {
      axios
        .post("/search/users", { user })
        .then(response => this.setState({ twitterData: response.data }))
        .catch(err => console.log(err));
    } else {
      this.setState({message: 'Please enter a valid user/tweet'})
    }
  };

  render() {
    return (
      <div className="search-page">
        <div>
          {" "}
          <h1 className="title">Search Page</h1>
          <h4>Search for a specific user or a phrase </h4>
        </div>
        <SearchForm
          handleChange={this.onHandleChange}
          handleSubmit={this.onSubmitChange}
        />

        {this.state.twitterData.length ? (
          <CardList twitterData={this.state.twitterData} />
        ) : (
          <h3 id='error-message'>{this.state.message}</h3>
        )}
      </div>
    );
  }
}

export default SearchPage;
