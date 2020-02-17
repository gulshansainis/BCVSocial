import React from "react";
import ReactDom from "react-dom";
import Form from "./components/Form";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  handleChange = e => {
    this.setState({ keyword: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <Form keyword={this.state.keyword} handleChange={this.handleChange} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
