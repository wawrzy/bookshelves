export const GET_BOOKS = 'GET_BOOKS';
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export function fetchBooks(shelveId, offset, limit) {
  return {
    type: GET_BOOKS,
    payload: {
      request: {
        url: `/shelves/${shelveId}/forms?offset=${offset}&limit=${limit}`,
      },
    },
  };
}

export const GET_BOOK_FORMS_SUCCESS = 'GET_BOOK_FORMS_SUCCESS';
export const GET_BOOK_FORMS = 'GET_BOOK_FORMS';
export function fetchBookFormsById(books) {
  return {
    type: GET_BOOK_FORMS,
    payload: {
      request: {
        method: 'PUT',
        url: '/batch',
        data: books.map(bookId => ({ method: 'GET', path: `/forms/${bookId}` })),
      },
    },
  };
}

export const GET_BOOK_RATES_SUCCESS = 'GET_BOOK_RATES_SUCCESS';
export const GET_BOOK_RATES = 'GET_BOOK_RATES';
export function fetchBookRatesById(books) {
  return {
    type: GET_BOOK_RATES,
    payload: {
      request: {
        method: 'PUT',
        url: '/batch',
        data: books.map(bookId => ({ method: 'GET', path: `/books/${bookId}` })),
      },
    },
  };
}
