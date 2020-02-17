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

export const error = () => {
  return {
    type: "ERROR"
  };
};

export const thunked = state => {
  store.dispatch(fetching());
  return function(dispatch) {
    return fetch("https://worldcup.sfg.io/matches/country?fifa_code=ARG")
      .then(data => data.json())
      .then(data => store.dispatch(fetched(data)))
      .catch(() => store.dispatch(error()));
  };
};
