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

1. Book List Display:
   ![image](https://github.com/user-attachments/assets/888543d2-9c40-4668-acf8-fdc3b86c0793)
 
2. Add a new Book:
   ![image](https://github.com/user-attachments/assets/456b2e1b-d17c-4942-90aa-87b4d1bb4e68)
   ![image](https://github.com/user-attachments/assets/d243053a-277b-4f35-a8b0-f3c93258766e)

3. Edit Book:
   ![image](https://github.com/user-attachments/assets/1b8215ab-5991-4a31-a144-79673146a456)
   ![image](https://github.com/user-attachments/assets/dd3596a2-37a4-4802-a967-a98f19ab9c40)


   
