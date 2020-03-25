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
          <select value={keyword} onChange={handleChange}>
              <option value="CAN">Canada</option>
              <option value="SCO">Scotland</option>
              <option value="AUS">Australia</option>
              <option value="ARG">Argentina</option>
              <option value="ITA">Italy</option>
              <option value="NZL">New Zealand</option>
              <option value="KOR">Korea Republic</option>
              <option value="THA">Thailand</option>
              <option value="CHI">Chile</option>
              <option value="CHN">China PR</option>
              <option value="JPN">Japan</option>
              <option value="ENG">England</option>
              <option value="NOR">Norway</option>
              <option value="BRA">Brazil</option>
              <option value="SWE">Sweden</option>
              <option value="RSA">South Africa</option>
              <option value="CMR">Cameroon</option>
              <option value="JAM">Jamaica</option>
              <option value="USA">USA</option>
              <option value="FRA">France</option>
              <option value="NED">Netherlands</option>
              <option value="GER">Germany</option>
              <option value="NGA">Nigeria</option>
              <option value="ESP">Spain</option>
            </select>
          <button style={{ background: buttonBg }} type="submit">
            Search
          </button>
        </div>
      </form>
     {/*
      <label htmlFor="colorPicker">
        Change color of submit button{" "}
        <input name="colorPicker" onChange={handleBgChange} type="color" />
      </label>
      */}
    </>
  );
};
export default Form;
