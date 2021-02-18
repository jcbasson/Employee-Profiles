import { combineReducers } from "redux";
import { reducers } from "./components";

const rootReducer = combineReducers(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default rootReducer;
