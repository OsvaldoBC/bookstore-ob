import React from 'react';

const BookList = (props) => {
  const { title, author } = props;

  return (
    <div className="book-container">
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button">Remove</button>
    </div>
  );
  }
export default BookList;
