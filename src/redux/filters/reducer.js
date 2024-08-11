import { SEARCHED, STATUSCHANGED } from "./actionType";
import { initailState } from "./initialState";

const filterReducer = (state = initailState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };
      
    case SEARCHED:
      return {
        ...state,
        searchText: action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
