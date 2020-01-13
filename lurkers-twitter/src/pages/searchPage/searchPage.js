import React, { Component } from "react";
import SearchBox from "../../components/search-box/search-box";
import CardList from "../../components/card-list/card-list";

import axios from "axios";

class SearchPage extends Component {
  constructor() {
    super();

    this.state = {
      user: "",
      tweet: "",
      twitterData: []
    };
  }

  onHandleChange = event => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  onSubmitChange = event => {
    event.preventDefault();

    const { user, tweet } = this.state;

    if (tweet.length > 2) {
      axios
        .post("/search/tweets", { tweet })
        .then(response => this.setState({twitterData:response.data.statuses}))
        .catch(err => console.log(err));
    } else if (user.length > 2) {
      axios
        .post("/search/users", { user })
        .then(response => console.log(response))
        .then(users => console.log(users))
        .catch(err => console.log(err));
    } else {
      console.log("Please enter something");
    }
  };

  render() {
    return (
      <div>
        <h1>Search Page</h1>
        <SearchBox
          handleChange={this.onHandleChange}
          handleSubmit={this.onSubmitChange}
        />

        {this.state.twitterData.length ? (
          <CardList twitterData={this.state.twitterData} />
        ) : (
          <h3>No results</h3>
        )}
      </div>
    );
  }
}

export default SearchPage;
