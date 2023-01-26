import React from 'react';
import { useDispatch } from 'react-redux';
import { asyncDeleteBook } from '../redux/books/BooksAsync';
import { deleteBook } from '../redux/books/books';

const BookList = (props) => {
  const { title, author, id, category } = props;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(asyncDeleteBook(id));
    dispatch(deleteBook(id));
  };

  return (
    <ul className="book-list">
      <li id={id} className="book-container">
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{category}</p>
        <button type="button" onClick={handleRemove}>Remove</button>
      </li>
    </ul>
  );
};
export default BookList;
