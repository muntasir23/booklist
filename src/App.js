import Navbar from "./components/Navbar";
import "./App.css";
import Booklist from "./components/Booklist";
import Sidebar from "./components/Sidebar";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useState } from "react";

function App() {
  const [editMode, setEditMode] = useState(false);
  const [bookToEdit, setBookToEdit] = useState(null);

  const handleEditMode = (bookList) => {
    setEditMode(true);
    setBookToEdit(bookList);
  };

  const handleChangeEditMode = () => {
    setEditMode(false);
  };

  return (
    <Provider store={store}>
      <Navbar />
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          {/* left side */}
          <Booklist addEditMode={handleEditMode} />
          {/* right side */}
          <Sidebar
            editMode={editMode}
            bookToEdit={bookToEdit}
            setBookToEdit={setBookToEdit}
            removeMode={handleChangeEditMode}
          />
        </div>
      </main>
    </Provider>
  );
}

export default App;
