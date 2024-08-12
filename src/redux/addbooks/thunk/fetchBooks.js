import { loaded } from "../action";

const fetchBooks = async (dispatch, getState) => {
  const response = await fetch("http://localhost:9000/books");
  const books = await response.json();

  dispatch(loaded(books));
};

export default fetchBooks;
