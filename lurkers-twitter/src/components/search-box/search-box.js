import React from "react";

import "./search-box.css";

const SearchBox = ({ handleChange, handleSubmit }) => {
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <label>
      User:
      <input type="text" name='user' onChange={handleChange} />
    </label>
    <label>
      Tweet:
      <input type="text" name='tweet' onChange={handleChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>  
    
    </div>
  );
};

export default SearchBox;
