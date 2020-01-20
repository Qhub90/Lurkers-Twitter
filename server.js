const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

const consumer_key = process.env.API_KEY;
const consumer_secret = process.env.SECRET_API_KEY;

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

  let keyword = req.body.tweet;

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
app.post("/search/comedy", (req, res) => {
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


//Static file declaration
app.use(express.static(path.join(__dirname, "lurkers-twitter/build")));

//production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "lurkers-twitter/build")));
  app.get("*", (req, res) => {
    res.sendfile(path.join((__dirname = "lurkers-twitter/build/index.html")));
  });
}
//build mode 
app.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/client/public/index.html'));})

//start server 
app.listen(port, (req, res) => {  console.log( `server listening on port: ${port}`);})


