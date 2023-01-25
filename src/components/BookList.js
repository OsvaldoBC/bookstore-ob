import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookList = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();

  const handleRemove = () => {
    console.log(id);
    dispatch(removeBook(id));
  };

  return (
    <ul className='book-list'>
      <li id ={id} className="book-container">
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" onClick={handleRemove}>Remove</button>
     </li>
    </ul>
  );
};
export default BookList;
