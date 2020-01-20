import React from 'react';

import Card from '../card/card';

import './card-list.css';



 const CardList = ({twitterData}) => {

  let test = twitterData.map(tweet => { 
    return <Card key={tweet.id}
                 image={tweet.user.profile_image_url} 
                 name={tweet.user.name}
                 text={tweet.text}
                 screenName={tweet.user.screen_name}
                 date={tweet.created_at}
                 />
  })
  return(
    <div className='card-list'>
     {test}
    </div>
  )
}

export default CardList;