import React from 'react';

import './card.css';

 const Card = ({name, text, screenName, image, date, rt_count}) => {
  return(
  <div className='card-container'>
    <div className='card-top'>
     <span className='card-span'><img alt='face' src={image}></img></span>
     <span className=''><h3> {name} </h3></span>
     <span className='card-p'><p> @{screenName}</p></span>
    </div>
    <div className='card-body'>
      <h4> {text}</h4>
    </div>
    <div className='card-footer'>
    <span className='card-span'><p>{date}</p></span>
    <span className='card-span'><p>{rt_count}</p></span>
    </div>
   
  </div>
      )
  }

  export default Card;