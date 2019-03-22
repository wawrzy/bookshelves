// @flow

import React, { PureComponent } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';

import { UText, UTag, URate } from 'Components/unit';

import './UBook.css';

type Props = {
  book: Object,
};

export default class UShelve extends PureComponent<Props> {
  render() {
    const { book } = this.props;

    return (
      <div className="book-container">
        <div className="book-image-container">
          <img alt="Book Preview" className="book-image" src={book.image} />
        </div>
        {this.renderStatus()}
        <div className="book-title">
          <UText
            fontSize={16}
            color="#27314C"
            fontWeight={900}
            textAlign="center"
          >
            {book.title}
          </UText>
        </div>
        {this.renderAuthors()}
      </div>
    );
  }

  renderStatus = () => (
    <div className="book-infos">
      {this.renderRate()}
      {this.renderTag()}
    </div>
  );

  renderTag = () => {
    const { book: { is_free: isFree, price } } = this.props;

    let content = 'Soon';
    let type = 'soon';

    if (isFree || price) {
      content = isFree ? 'Read' : `${getSymbolFromCurrency(price.currency)} ${price.amount / 100}`;
      type = isFree ? 'free' : 'buy';
    }

    return (
      <UTag
        content={content}
        type={type}
        contentColor="#FFFFFF"
      />
    );
  }

  renderRate = () => {
    const { book: { averageRating } } = this.props;

    if (!averageRating) return null;

    return (
      <URate rate={parseFloat(averageRating).toFixed(1)} />
    );
  }

  renderAuthors = () => {
    const { book: { authors } } = this.props;

    if (authors.length === 0) return null;

    const content = `by ${authors.map(({ name }) => name).join(', ')}`;

    return (
      <div className="book-authors">
        <UText
          color="#788EAD"
          textAlign="center"
          fontSize={14}
        >
          {content}
        </UText>
      </div>
    );
  }
}
