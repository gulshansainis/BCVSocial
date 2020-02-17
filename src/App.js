import React from "react";
import Form from "./components/Form";
import { connect } from "react-redux";

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

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(App);
