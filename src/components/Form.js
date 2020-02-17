import React from "react";

const Form = props => {
  const { keyword, handleChange } = props;

  return (
    <form className="searchForm">
      <h1>Enter FIFA Code</h1>
      <div className="search-controls">
        <input
          type="text"
          value={keyword}
          onChange={handleChange}
          placeholder="FIFA country code"
          required
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};
export default Form;
