import { useContext, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {
  const { fetchBooks } = useContext(BooksContext);

  // useEffect is used to run any code that we put inside it for the first time and rerendered at any condition that we put
  // inside that empty square brackets
  // without the square brackets the useEffect calls the arrow function every time.
  // with empty square brackets the useEffect calls the arrow function only first time.
  // with some condition inside the square brackets the useEffect calls the arrow function when it meets the condition.
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
