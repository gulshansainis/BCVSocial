import React from "react";
import ReactDom from "react-dom";
import Form from "./components/Form";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Form />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
