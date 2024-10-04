# Reading List App

This project is a simple, dynamic **book management application** built using **React**. It allows users to create, edit, delete, and display a list of books, fetching data from a local JSON server.

## Key Features:
- **Add Books**: Users can add new books with custom titles.
- **Edit Books**: Existing book titles can be edited dynamically.
- **Delete Books**: Remove books from the list with ease.
- **Display Books**: Books are displayed in a grid with images fetched from `picsum.photos` based on the book's ID.
- **State Management**: React Context API is used to manage the state across components.
- **RESTful API**: Uses Axios to interact with the JSON server for CRUD operations.

## Project Structure:
- `App.js`: The main component that renders the book list and creation form. It also fetches books using context.
- `BookList.js`: Displays all books with edit and delete options.
- `BookCreate.js`: A form to add new books to the list.
- `BookEdit.js`: Enables editing of an existing book’s title.
- `BookShow.js`: Shows individual books, handling their edit and delete functionalities.
- `context/books.js`: Manages the global state and CRUD operations using React Context and Axios.

## Technologies Used:
- **React**: For building the user interface and managing component state.
- **Axios**: For handling HTTP requests to the JSON server.
- **React Context**: For global state management.
- **CSS**: For styling the components.
- **JSON Server**: A simple local server to store and manage books.

## Project Preview:

1. Add a new Book:
2. Book List Display:
3. Edit Book: