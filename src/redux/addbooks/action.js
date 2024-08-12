import { ADDED, DELETED, EDITED, LOADED, TOGGLED } from "./actionType";

export const loaded = (books) => {
  return {
    type: LOADED,
    payload: books,
  };
};

export const added = (bookDetails) => {
  return {
    type: ADDED,
    payload: bookDetails,
  };
};

export const deleted = (bookId) => {
  return {
    type: DELETED,
    payload: bookId,
  };
};

export const edited = (bookDetails) => {
  return {
    type: EDITED,
    payload: bookDetails,
  };
};

export const toggled = (bookId) => {
  return {
    type: TOGGLED,
    payload: bookId,
  };
};
