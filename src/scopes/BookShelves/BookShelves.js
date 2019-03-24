// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SListShelves, SListBooks } from 'Components/structural';

import { fetchShelves } from 'Redux/actions/shelves';
import { fetchBooks, fetchBookFormsById, fetchBookRatesById } from 'Redux/actions/books';

import type { Book } from 'Types/book';
import type { Shelve } from 'Types/shelve';

import './BookShelves.css';

type Props = {
  shelves: Array<Shelve>,
  books: Array<Book>,
  numberOfBooks: number,
  history: Object,
  getShelves: Function,
  getBooks: Function,
  getBookForms: Function,
  getAverageRatings: Function,
};

type State = {
  currentShelve: ?string,
  offset: number,
};

const LIMIT_PER_PAGE = 10;

const mapStateToProps = state => ({
  shelves: state.shelves.shelves,
  books: state.books.books,
  numberOfBooks: state.books.numberOfBooks,
});

const mapDispatchToProps = dispatch => ({
  getShelves: () => dispatch(fetchShelves()),
  getBooks: (shelveId: string, offset: number, limit: number) => dispatch(fetchBooks(shelveId, offset, limit)),
  getBookForms: (books: Array<string>) => dispatch(fetchBookFormsById(books)),
  getAverageRatings: (books: Array<string>) => dispatch(fetchBookRatesById(books)),
});


class BookShelves extends Component<Props, State> {
  state = {
    currentShelve: null,
    offset: 0,
  };

  componentDidMount() {
    const { getShelves, history } = this.props;

    history.listen(this.handleRouteChange);
    getShelves();
  }

  componentDidUpdate() {
    const { history, shelves } = this.props;
    const { currentShelve } = this.state;

    if (!currentShelve && shelves.length > 0) history.push(`/${shelves[0].slug}`);
  }

  render() {
    const { shelves, books, numberOfBooks } = this.props;
    const { currentShelve, offset } = this.state;

    return (
      <div id="BookShelves">
        <SListShelves shelves={shelves} current={currentShelve} />
        <SListBooks
          books={books}
          onPageChange={this.handleChangePage}
          forcePage={offset / LIMIT_PER_PAGE}
          pageCount={numberOfBooks / LIMIT_PER_PAGE}
        />
      </div>
    );
  }

  handleRouteChange = (history) => {
    const { shelves } = this.props;

    const currentSlug = history.pathname.substring(1);
    const shelve = shelves.find(shelve => shelve.slug === currentSlug);

    if (shelve) {
      this.setState({ currentShelve: currentSlug, offset: 0 }, this.handleShelveChange.bind(this, shelve.id));
    }
  }

  handleShelveChange = (shelveId: string) => {
    const { getBooks } = this.props;
    const { offset } = this.state;

    getBooks(shelveId, offset, LIMIT_PER_PAGE)
      .then((action) => {
        const books = action.payload.data;

        this.getBooksData(books);
      });
  }

  handleChangePage = ({ selected }) => {
    const { getBooks, shelves } = this.props;
    const { currentShelve } = this.state;

    const newOffset = selected * LIMIT_PER_PAGE;
    const shelve = shelves.find(shelve => shelve.slug === currentShelve);

    if (!shelve) return;

    getBooks(shelve.id, newOffset, LIMIT_PER_PAGE)
      .then((action) => {
        const books = action.payload.data;

        this.setState({ offset: newOffset }, this.getBooksData.bind(null, books));
      });
  }

  getBooksData = (books: Array<string>) => {
    const { getAverageRatings, getBookForms } = this.props;

    getBookForms(books).then(({ payload: { data } }) => {
      getAverageRatings(data.map(({ body: { book: { id } } }) => id));
    });
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookShelves);
