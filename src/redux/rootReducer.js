import { combineReducers } from "redux";
import bookReducer from "./addbooks/reducer";
import filterReducer from "./filters/reducer";

const rootReducer = combineReducers({
  books: bookReducer,
  filters: filterReducer,
});

export default rootReducer;
