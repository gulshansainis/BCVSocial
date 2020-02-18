import React from "react";
import Form from "./Form";
import { connect } from "react-redux";
import ErrorBoundary from "./ErrorBoundary";
import ResultsGrid from "./ResultsGrid";

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
    const { results = [], isLoading, isError } = this.props;
    return (
      <div className="container">
        <Form keyword={this.state.keyword} handleChange={this.handleChange} />
        <ErrorBoundary>
          {isLoading ? (
            <h2 className="animate-flicker">Loading...</h2>
          ) : isError ? (
            <h2 className="error">Something went wrong...</h2>
          ) : results.length > 0 ? (
            <ResultsGrid results={results} />
          ) : (
            ""
          )}
        </ErrorBoundary>
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
