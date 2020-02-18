/**
 * App initial state
 */
const initialState = {
  results: [],
  isLoading: false,
  isError: false,
  error: ""
};

/**
 *
 * @param {*} state
 * @param {*} action
 *
 * search reducer function that returns new state based on user action
 */
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING":
      return {
        ...state,
        isLoading: true,
        results: [],
        isError: false,
        error: ""
      };
    case "FETCHED":
      return {
        ...state,
        isLoading: false,
        results: action.results,
        isError: false,
        error: ""
      };
    case "ERROR":
      return {
        ...state,
        results: [],
        isLoading: false,
        isError: true,
        error: action.error
      };
    default:
      return state;
  }
};

export default searchReducer;
