import React from "react";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";
import Feature from "./Feature";

export default function Booklist({addEditMode}) {
  const books = useSelector((state) => state.books);
  const filters = useSelector((state) => state.filters);
  const { searchText } = filters;

  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>
        <Feature />
      </div>

      <div className="lws-bookContainer">
        {/* <!-- Card 1 --> */}
        {books
          .filter((book) => {
            const { status } = filters;
            switch (status) {
              case "All":
                return book;

              case "Featured":
                return book.featured;
              default:
                return book;
            }
          })
          .filter((book) => {
            return searchText.toLowerCase() === ""
              ? book
              : book.bookName.toLowerCase().includes(searchText);
          })
          .map((book) => (
            <BookCard book={book} addEditMode={addEditMode} />
          ))}
      </div>
    </div>
  );
}
