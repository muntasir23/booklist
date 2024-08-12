import { edited } from "../action";

const updateBooks = (booklist) => {
  return async (dispatch, getState) => {
    const response = await fetch(`http://localhost:9000/books/${booklist.id}`, {
      method: "PATCH",
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
    dispatch(edited(book));
  };
};

export default updateBooks;
