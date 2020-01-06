import React from 'react';

import './card.css';

 const Card = ({name, text, screenName, image}) => {
  return(
  <div className='card-container'>
    <img alt='face' src={image}></img>
    <h1> {name} </h1>
    <p> {screenName}</p>
    <h3> {text}</h3>
  </div>
      )
  }

  export default Card;