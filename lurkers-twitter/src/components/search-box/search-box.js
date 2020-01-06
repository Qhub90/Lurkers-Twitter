import React from "react";

import "./search-box.css";

const SearchBox = ({ handleChange, submitChange }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder="search"
        onChange={handleChange}
      />

      <button onClick={submitChange}>Go</button>
    </div>
  );
};

export default SearchBox;
