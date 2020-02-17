import { createStore, applyMiddleware } from "redux";
import searchReducer from "./reducers/searchReducer";
import thunk from "redux-thunk";

const store = createStore(searchReducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
export default store;
