import { combineReducers } from 'redux';

import categoriesReducer from './categories/categories';
import booksReducer from './books/books';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  books: booksReducer,
});

export default rootReducer;
