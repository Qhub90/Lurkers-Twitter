const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

const consumer_key = process.env.API_KEY;
const consumer_secret = process.env.SECRET_API_KEY;
const access_token = process.env.ACCESS_TOKEN;


let token = "";

const config = {
  url: "https://api.twitter.com/oauth2/token",
  method: "post",
  auth: {
    username: consumer_key,
    password: consumer_secret
  },
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  data: "grant_type=client_credentials"
};

const userConfig = {
  url: "https://api.twitter.com/1.1/statuses/update.json",
  method: "post",
  headers: {

  }
}

axios
  .request(config)
  .then(function(res) {
    token = res.data.access_token;
  })
  .catch(function(error) {
    console.log(error);
  });

app.post("/search/tweets", (req, res) => {
  // res.send(Elon_Musk)

  let keyword  = req.body.tweet.toLowerCase();

  axios
    .get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${keyword}&result_type=popular&count=6`,
      { headers: { Authorization: "Bearer " + token } }
    )
    .then(function(response) {
      // handle success
      res.send(response.data);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
});

app.post("/search/users", (req, res) => {

  let keyword = req.body.user.toLowerCase();

    axios
    .get(
      `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${keyword}&count=6`,
      { headers: { Authorization: "Bearer " + token } }
    )
    .then(function(response) {
      // handle success
      res.send(response.data);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
  
});
app.post("/search/random", (req, res) => {

  let keyword = req.body.username.toLowerCase();

    axios
    .get(
      `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${keyword}&count=6`,
      { headers: { Authorization: "Bearer " + token } }
    )
    .then(function(response) {
      // handle success
      res.send(response.data);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
  
});

// app.get("/users", (req, res) => {
//   // res.send(Elon_Musk)
// });

app.listen(port, () => console.log(`Listening on port ${port}`));

// function randomString(length, chars) {
  //   var result = '';
  //   for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
  //   return result;
  // } 
  // // res.send(Elon_Musk)
  
  // let keyword = req.body.user.toLowerCase();
  
  // let nonce = randomString(32,'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
  
  // let time = Math.round((new Date()).getTime() / 1000.0);
  
  // axios
  //   .get(
  //     `https://api.twitter.com/1.1/users/search.json?q=${keyword}&result_type=popular&count=6`,
  //     { headers: { Authorization: `OAuth oauth_consumer_key=${consumer_key},` +
  //     'oauth_signature_method="HMAC-SHA1",' +
  //     'oauth_timestamp='+time +
  //     'oauth_nonce='+nonce +
  //     'oauth_version="1.0",' +
  //     `oauth_token=${access_token},`+
  //     'oauth_signature='+token } }
  //   )
  //   .then(function(response) {
  //     // handle success
  //     console.log(response.data)
  //     // res.send(response.data);
  //   })
  //   .catch(function(error) {
  //     // handle error
  //     console.log(error);
  //   });

