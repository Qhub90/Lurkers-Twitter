import React, { Component } from "react";
import CardList from "../../components/card-list/card-list";

import axios from "axios";


import "./randomPage.css";

import tom from "../../images/tom_segura1.jpg";
import joe from "../../images/joe_rogan.jpg";
import joey from "../../images/joey_diaz.jpg";
import andrew from "../../images/andrew_santino.jpg";
import bill from "../../images/bill_burr.jpg";

class RandomPage extends Component {
  constructor() {
    super();

    this.state = {
      twitterData: []
    };
  };

  grabUser = username => {
    axios
      .post("/search/random", { username })
      .then(response => this.setState({twitterData:response.data}))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="header">
          {" "}
          <h1>Random Page</h1>{" "}
        </div>

        {this.state.twitterData.length ? (
          <CardList twitterData={this.state.twitterData} />
        ) : (
          <div className="card-list">
            <div className="podcast">
              <img
                slt="hello"
                src={tom}
                onClick={() => this.grabUser("YMHBlueBan")}
              />
            </div>
            <div className="podcast">
              <img
                src={andrew}
                onClick={() => this.grabUser("CheetoSantino")}
              />
            </div>
            <div className="podcast">
              <img src={joey} onClick={() => this.grabUser("madflavor")} />
            </div>
            <div className="podcast">
              <img src={bill} onClick={() => this.grabUser("billburr")} />
            </div>
            <div className="podcast">
              <img src={joe} onClick={() => this.grabUser("joerogan")} />
            </div>
          </div>
        )}

      </div>
    );
  }
}

export default RandomPage;
