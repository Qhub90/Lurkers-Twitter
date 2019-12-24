import React from 'react';

import { Card } from '../card/card';


import './card-list.css';

export const CardList = (props) => {
  return(
    <div className='card-list'>
      {props.twitterArray.map(tweet => (
        <Card key={tweet.id} tweet={tweet} />
      ))}
    </div>
  )
}