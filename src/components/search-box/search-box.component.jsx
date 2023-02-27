import React from "react";

import "./search-box.styles.css";

const Search = ({ placeholder, handleChange }) => {
  return (
    <div className="container">
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
