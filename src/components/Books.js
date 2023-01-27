import React from 'react';
import { useSelector } from 'react-redux';

import BookForm from './BookForm';
import BookList from './BookList';

const Books = () => {
  const books = useSelector((state) => state.books);

  const bookList = books.map((book) => (
    <BookList
      key={book.item_id}
      id={book.item_id}
      title={book.title}
      author={book.author}
      category={book.category}
    />
  ));

  return (
    <div className="container">
      <ul className="book-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {bookList}
      </ul>
      <BookForm />
    </div>
  );
};
export default Books;
