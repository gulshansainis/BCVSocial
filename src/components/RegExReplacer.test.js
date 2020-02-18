import React from "react";
import { render } from "@testing-library/react";
import RegExReplacer from "./RegExReplacer";

it("adds sortAndReplace to window object", () => {
  render(<RegExReplacer />);
  expect(window.sortAndReplace !== undefined).toBeTruthy();
});

it("sortAndReplace sorts and replace link-color key with the actual value (#244cde)", () => {
  render(<RegExReplacer />);
  const input = {
    "link-color": "#244cde",
    "primary-button": "link-color",
    "nav-color": "#1a1d26",
    "subnav-color": "#494f63",
    "nav-item-active-color": "link-color"
  };
  const expected = {
    "link-color": "#244cde",
    "primary-button": "#244cde",
    "subnav-color": "#494f63",
    "nav-color": "#1a1d26",
    "nav-item-active-color": "#244cde"
  };

  // define order to match with function output
  const expectedJson = JSON.stringify(expected, [
    "subnav-color",
    "nav-color",
    "link-color",
    "primary-button",
    "nav-item-active-color"
  ]);

  expect(expectedJson).toEqual(window.sortAndReplace(input));
});
