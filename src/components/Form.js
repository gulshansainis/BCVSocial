import React from "react";

const Form = () => {
  return (
    <form className="searchForm">
      <h1>Enter FIFA Code</h1>
      <div class="search-controls">
        <input type="text" value="" placeholder="FIFA country code" required />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};
export default Form;
