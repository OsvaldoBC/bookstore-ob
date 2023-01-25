import React from 'react';

const BookList = (props) => {
  const { title, author } = props;

  return (
    <ul className='book-list'>
      <li className="book-container">
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button">Remove</button>
     </li>
    </ul>
  );
};
export default BookList;
