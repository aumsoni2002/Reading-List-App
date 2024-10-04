import BookEdit from "./BookEdit";
import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookShow({ singleBook }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();

  const handleBookEditIcon = () => {
    setShowEdit(!showEdit);
  };

  const handleDeleteBookById = () => {
    deleteBookById(singleBook.id);
  };

  const handleIconChangeBySubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{singleBook.title}</h3>;
  if (showEdit === true) {
    content = (
      <BookEdit
        singleBook={singleBook}
        onHandleIconChangeBySubmit={handleIconChangeBySubmit}
      />
    );
  }
  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${singleBook.id}/300/200`}
        alt="books"
      />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleBookEditIcon}>
          Edit
        </button>

        <button className="delete" onClick={handleDeleteBookById}>
          delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
