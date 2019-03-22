import { combineReducers } from 'redux';

import { shelves } from './shelves';
import { books } from './books';

export default combineReducers({
  shelves,
  books,
});
