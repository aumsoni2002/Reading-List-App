import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  const { books } = useBooksContext();
  const renderedBooks = books.map((singleBook) => {
    return <BookShow singleBook={singleBook} key={singleBook.id} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
