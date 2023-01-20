import React from 'react';

const BookForm = () => (
  <form>
    <h2>ADD NEW BOOK</h2>
    <div className="form-container">
      <input type="text" className="title" name="title" placeholder="Book Title" />
      <input type="text" className="author" name="author" placeholder="Author" />
      <button type="submit">ADD BOOK</button>
    </div>
  </form>
);

export default BookForm;
