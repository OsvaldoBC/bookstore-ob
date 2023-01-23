import React from 'react';
import BookForm from './BookForm';
import BookList from './BookList';

const Books = () => (
  <div className="container" style={{ padding: '1em 3em' }}>
    <div className="book-list">
      <BookList title="book1" author="osvaldo" />
      <BookForm />
    </div>
  </div>
);
export default Books;
