import React from 'react';

import Card from '../card/card';

import './card-list.css';



 const CardList = ({twitterData}) => {

  let test = twitterData.map(tweet => { 
    return <Card key={tweet.id}
                 image={tweet.profile_image_url_https} 
                 name={tweet.name}
                 text={tweet.text}
                 screenName={tweet.screen_name}/>
  })
  return(
    <div className='card-list'>
     {test}
    </div>
  )
}

export default CardList;