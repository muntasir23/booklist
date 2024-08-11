import { SEARCHED, STATUSCHANGED } from "./actionType";

export const statusChanged = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};

export const searched = (searchText) => {
  return {
    type: SEARCHED,
    payload: searchText,
  };
};
