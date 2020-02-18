import store from "../store";

export const fetching = () => {
  return {
    type: "FETCHING"
  };
};

export const fetched = results => {
  return {
    type: "FETCHED",
    results
  };
};

export const error = e => {
  return {
    type: "ERROR",
    error: e
  };
};

export const thunked = keyword => {
  // start loading/spinner
  store.dispatch(fetching());
  return function(dispatch) {
    return fetch(`https://worldcup.sfg.io/matches/country?fifa_code=${keyword}`)
      .then(response => {
        // if response is not OK throw Error
        if (response.status !== 200) {
          throw Error(`[${response.status}] Something went wrong`);
        } else {
          return response.json();
        }
      })
      .then(data => dispatch(fetched(data)))
      .catch(e => {
        if (e.message === "[404] Something went wrong") {
          dispatch(error(e.message));
        } else {
          // throw error up
          throw Error(`Application error ${e.message}`);
        }
      });
  };
};
