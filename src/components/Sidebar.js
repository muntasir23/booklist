import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import addBooks from "../redux/addbooks/thunk/addBooks";
import updateBooks from "../redux/addbooks/thunk/updateBook";

export default function Sidebar({ editMode, bookToEdit , removeMode}) {
  const [bookData, setBookData] = useState([
    {
      bookName: "",
      author: "",
      imgUrl: "",
      price: "",
      rating: "",
      featured: false,
    },
  ]);

  useEffect(() => {
    if (bookToEdit) {
      setBookData(bookToEdit);
    }
  }, [bookToEdit]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBookData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookData({
      bookName: "",
      author: "",
      imgUrl: "",
      price: "",
      rating: "",
      featured: false,
    });
    dispatch(addBooks(bookData));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(updateBooks(bookData));
    setBookData({
      bookName: "",
      author: "",
      imgUrl: "",
      price: "",
      rating: "",
      featured: false,
    });
    removeMode()
  };

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form
          onSubmit={editMode ? handleEdit : handleSubmit}
          className="book-form"
        >
          <div className="space-y-2">
            <label htmlFor="input-Bookname">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="bookName"
              value={bookData.bookName}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              value={bookData.author}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="imgUrl"
              value={bookData.imgUrl}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                value={bookData.price}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                value={bookData.rating}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              checked={bookData.featured}
              onChange={handleChange}
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              {" "}
              This is a featured book{" "}
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            {editMode ? "Update Book" : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
}
