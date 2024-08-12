import { added } from "../action";

const addBooks = (booklist) => {
  return async (dispatch, getState) => {
    const response = await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify({
        bookName: booklist.bookName,
        author: booklist.author,
        imgUrl: booklist.imgUrl,
        price: booklist.price,
        rating: booklist.rating,
        featured: booklist.featured,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const book = await response.json();
    dispatch(added(book));
  };
};

export default addBooks;
