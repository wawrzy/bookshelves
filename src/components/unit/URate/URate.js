// @flow

import React, { PureComponent } from 'react';

import './URate.css';


type Props = {
  rate: number,
};

export default class URate extends PureComponent<Props> {
  render() {
    const { rate } = this.props;

    return (
      <div className="rate-container">
        <img className="rate-star" alt="Sar" src="https://img.icons8.com/color/48/000000/filled-star.png" />
        {rate}
      </div>
    );
  }
}
