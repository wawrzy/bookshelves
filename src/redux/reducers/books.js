// @flow

import { GET_BOOKS_SUCCESS, GET_BOOK_FORMS_SUCCESS, GET_BOOK_RATES_SUCCESS } from 'Redux/actions/books';

import type { Book } from 'Types/book';

type Books = {
  books: Array<Book>,
  numberOfBooks: number,
};

const booksState = {
  books: [],
  numberOfBooks: 0,
};

export const books = (state: Books = booksState, action: any) => {
  switch (action.type) {
    case GET_BOOKS_SUCCESS:
      return { books: [], numberOfBooks: parseInt(action.payload.headers['x-glose-count'], 10) };
    case GET_BOOK_FORMS_SUCCESS:
      return { ...state, books: action.payload.data.map(({ body }) => body) };
    case GET_BOOK_RATES_SUCCESS:
      return {
        ...state,
        books: state.books.map<Book>((book: Book) => {
          const bookAverageObj: any = action.payload.data.find(({ body: { id: bookId } }) => bookId === book.book.id).body;

          return { ...book, averageRating: bookAverageObj.average_rating ? bookAverageObj.average_rating : null };
        }),
      };
    default:
      return state;
  }
};
