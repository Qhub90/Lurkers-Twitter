import React from "react";

import "./search-form.css";

const SearchForm = ({ handleChange, handleSubmit }) => {
  return (
    <div id='one' className='search-form'>
      <form onSubmit={handleSubmit}>
        <input className='input-form' placeholder='Username' type='text' name='user' onChange={handleChange} />
        <input className='input-form' placeholder='Tweets' type='text' name='tweet' onChange={handleChange} />
        <input id='button-submit' type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default SearchForm;
