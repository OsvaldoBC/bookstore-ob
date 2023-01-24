import React from 'react';
import { useSelector } from 'react-redux';
import BookForm from './BookForm';
import BookList from './BookList';


const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <h1>Books</h1>
      <BookList title={books[0].title} author={books[0].author} />
      <BookForm />
    </div>
  );
};
export default Books;
