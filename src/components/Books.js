import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncGetBooks } from '../redux/books/BooksAsync';

import BookForm from './BookForm';
import BookList from './BookList';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(asyncGetBooks(dispatch));
  }, []);
  
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
