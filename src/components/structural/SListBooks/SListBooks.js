// @flow

import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

import { UBook } from 'Components/unit';
import type { Book } from 'Types/book';

import './SListBooks.css';

type Props = {
  books: Array<Book>,
  onPageChange: Function,
  pageCount: number,
};

export default class SListBooks extends Component<Props> {
  render() {
    const { books, pageCount } = this.props;

    return (
      <div className="books-container">
        <div>
          <div className="books-grid">
            {books.map(this.renderBook)}
          </div>
        </div>
        {pageCount > 1 && this.renderPagination()}
      </div>
    );
  }

  renderBook = (book: Object) => <UBook key={book.id} className="book" book={book} />

  renderPagination = () => {
    const { onPageChange, pageCount } = this.props;

    return (
      <ReactPaginate
        previousLabel={null}
        nextLabel={null}
        breakLabel="..."
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={onPageChange}
        containerClassName="pagination"
        activeClassName="page-active"
      />
    );
  }
}
