import React from "react";
import store from "../store";
import { thunked } from "../actions/searchActions";

const Form = props => {
  const { keyword, handleChange } = props;

  const handleSubmit = e => {
    // cancel form submit
    e.preventDefault();
    // dispatch keyword to thunked action
    store.dispatch(thunked(keyword));
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
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
