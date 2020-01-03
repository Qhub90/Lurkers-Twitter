import React from 'react';

import './card.css';

 const Card = (props) => {
  return(
  <div className='card-container'>
    <img alt='face' src={`https://robohash.org/${props.tweet.id}?set=set2&size=150x150`}></img>
    <h1> {props.tweet.name} </h1>
    <p> {props.tweet.username}</p>
    <h3> {props.tweet.company.catchPhrase}</h3>
  </div>
      )
  }

  export default Card;