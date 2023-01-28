import React from 'react';
import { useDispatch } from 'react-redux';
import { asyncDeleteBook } from '../redux/books/BooksAsync';
import { deleteBook } from '../redux/books/books';
import './BookList.css';
import progress from '../images/progress.svg';
import './Categories.css';

const BookList = (props) => {
  const {
    title, author, id, category,
  } = props;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(asyncDeleteBook(id));
    dispatch(deleteBook(id));
  };

  return (
    <div>
      <ul className="d-flex books-List">
        <li>
          <div id={id} className="d-flex book-container">
            <div className="d-flex book-info">
              <div className="book-details">
                <p className="book-category">{category}</p>
                <h2 className="book-title">{title}</h2>
                <p className="book-author">{author}</p>
                <div className="d-felex book-button">
                  <button type="button">Comments</button>
                  <button type="button" onClick={handleRemove}>Remove</button>
                  <button type="button">Edit</button>
                </div>
              </div>
              <div className="progress-container">
                <img src={progress} alt="progress" />
                <div className="d-flex progress-info">
                  <p className="progress-percent">73%</p>
                  <p className="progress-status">Completed</p>
                </div>
              </div>
              <div className="d-flex chapter-container">
                <p className="current-chapter">CURRENT CHAPTER</p>
                <p className="chapter">Chapter 17</p>
                <button type="button" className="chapter-button">UPDATE PROGRESS</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default BookList;
