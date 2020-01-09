const express = require('express');
const axios = require('axios');

// require('dotenv').config();

// // // twitter stuff ////
// // const qs = require('querystring');
// // const request = require('request');

// const util = require('util');
// const get = util.promisify(request.get);
// // const post = util.promisify(request.post);

// const consumer_key = process.env.API_KEY;
// const consumer_secret = process.env.SECRET_API_KEY;

// const endpointURL = new URL('https://api.twitter.com/1.1/search/tweets.json');


const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));


app.get('/search', (req, res) => {
  // res.send(Elon_Musk)

  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    // handle success
    res.send(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
})



// const params = {
//   q: 'Elon',
// };



// async function getRequest({oauth_token, oauth_token_secret}) {
//   const oAuthConfig = {
//     consumer_key: consumer_key,
//     consumer_secret: consumer_secret,
//     token: oauth_token,
//     token_secret: oauth_token_secret,
//   };

//   const req = await get({url: endpointURL, oauth: oAuthConfig, qs: params, json: true});
//   if (req.body) {
//     return req.body;
//   } else {
//     throw new Error('Cannot get an OAuth request token');
//   }
// }

const Elon_Musk = 
[
  {
      "id": 16122277,
      "id_str": "16122277",
      "name": "ELON",
      "screen_name": "elonrutberg",
      "location": "NY / LA / in between / ",
      "description": "",
      "url": "https://t.co/pSJv6azfxs",
      "entities": {
          "url": {
              "urls": [
                  {
                      "url": "https://t.co/pSJv6azfxs",
                      "expanded_url": "http://elonrutberg.com",
                      "display_url": "elonrutberg.com",
                      "indices": [
                          0,
                          23
                      ]
                  }
              ]
          },
          "description": {
              "urls": []
          }
      },
      "protected": false,
      "followers_count": 7890,
      "friends_count": 988,
      "listed_count": 76,
      "created_at": "Thu Sep 04 00:27:24 +0000 2008",
      "favourites_count": 4845,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 1672,
      "lang": null,
      "status": {
          "created_at": "Wed Dec 25 08:10:31 +0000 2019",
          "id": 1209748241635524609,
          "id_str": "1209748241635524609",
          "text": "Sorry the end of this decade ended up kind of sucking. Was totally my fault. I’ll explain later.",
          "truncated": false,
          "entities": {
              "hashtags": [],
              "symbols": [],
              "user_mentions": [],
              "urls": []
          },
          "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 1,
          "favorite_count": 27,
          "favorited": false,
          "retweeted": false,
          "lang": "en"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "BADFCD",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1023623502883160075/AqYdV1qR_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1023623502883160075/AqYdV1qR_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/16122277/1532885850",
      "profile_link_color": "1A3D33",
      "profile_sidebar_border_color": "F2E195",
      "profile_sidebar_fill_color": "FFF7CC",
      "profile_text_color": "0C3E53",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "can_media_tag": false,
      "followed_by": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
  },
  {
      "id": 44196397,
      "id_str": "44196397",
      "name": "Elon Musk",
      "screen_name": "elonmusk",
      "location": "",
      "description": "",
      "url": null,
      "entities": {
          "description": {
              "urls": []
          }
      },
      "protected": false,
      "followers_count": 30416743,
      "friends_count": 81,
      "listed_count": 52789,
      "created_at": "Tue Jun 02 20:12:29 +0000 2009",
      "favourites_count": 4569,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 9630,
      "lang": null,
      "status": {
          "created_at": "Wed Jan 01 06:50:06 +0000 2020",
          "id": 1212264717617639424,
          "id_str": "1212264717617639424",
          "text": "Congratulations Tesla &amp; SpaceX on great 2019! You rock!! Looking forward to epic 2020 ♥️🚀🛰🚘☀️",
          "truncated": false,
          "entities": {
              "hashtags": [],
              "symbols": [],
              "user_mentions": [],
              "urls": []
          },
          "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 7934,
          "favorite_count": 154881,
          "favorited": false,
          "retweeted": false,
          "lang": "en"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1205226947346722817/veJLfnPs_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1205226947346722817/veJLfnPs_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/44196397/1576183471",
      "profile_link_color": "0084B4",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "can_media_tag": true,
      "followed_by": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
  }
]
