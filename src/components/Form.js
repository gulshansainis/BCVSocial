import React, { useState } from "react";
import store from "../store";
import { thunked } from "../actions/searchActions";

const Form = props => {
  const { keyword, handleChange } = props;
  const [buttonBg, setButtonBg] = useState(null);

  const handleSubmit = e => {
    // cancel form submit
    e.preventDefault();
    // dispatch keyword to thunked action
    store.dispatch(thunked(keyword));
  };

  const handleBgChange = e => {
    setButtonBg(e.target.value);
  };

  return (
    <>
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
          <button style={{ background: buttonBg }} type="submit">
            Search
          </button>
        </div>
      </form>
      <label htmlFor="colorPicker">
        Change color of submit button{" "}
        <input name="colorPicker" onChange={handleBgChange} type="color" />
      </label>
    </>
  );
};
export default Form;
