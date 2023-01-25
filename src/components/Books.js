import React from 'react';
import { useSelector } from 'react-redux';
import BookForm from './BookForm';
import BookList from './BookList';

const Books = () => {
  const books = useSelector((state) => state.books);

  const bookList = books.map((book) => (
    <BookList
      key={book.id}
      id={book.id}
      title={book.title}
      author={book.author}
    />
  ));

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {bookList}
      </ul>
      <BookForm />
    </div>
  );
};
export default Books;
