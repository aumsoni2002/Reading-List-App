import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({ singleBook, onHandleIconChangeBySubmit }) {
  const [title, setTitle] = useState(singleBook.title);
  const { updateBookById } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onHandleIconChangeBySubmit();
    updateBookById(singleBook.id, title);
  };

  return (
    <form onSubmit={handleFormSubmit} className="book-edit">
      <label>Title</label>
      <input value={title} className="input" onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
