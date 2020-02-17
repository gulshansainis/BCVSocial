const initialState = {
  results: [],
  isloading: false,
  isError: false
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING":
      return {
        ...state,
        isloading: true
      };
    case "FETCHED":
      return {
        ...state,
        isloading: false,
        results: action.results
      };
    case "ERROR":
      return {
        ...state,
        isloading: false,
        isError: true
      };
    default:
      return state;
  }
};

export default searchReducer;
