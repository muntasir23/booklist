import { ADDED, DELETED, EDITED, LOADED, TOGGLED } from "./actionType";
import { initailState } from "./initialState";

const nextId = (books) => {
  const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
  return maxId + 1;
};

const bookReducer = (state = initailState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload;

    case ADDED:
      return [
        ...state,
        {
          id: nextId(state),
          bookName: action.payload.bookName,
          author: action.payload.author,
          imgUrl: action.payload.imgUrl,
          price: action.payload.price,
          rating: action.payload.rating,
          featured: action.payload.featured,
        },
      ];

    case DELETED:
      return state.filter((book) => book.id !== action.payload);

    case TOGGLED:
      return state.map((book) => {
        if (book.id !== action.payload) {
          return book;
        }
        return {
          ...book,
          featured: !book.featured,
        };
      });

    case EDITED:
      return state.map((book) =>
        book.id === action.payload.id ? action.payload : book
      );

    default:
      return state;
  }
};

export default bookReducer;
