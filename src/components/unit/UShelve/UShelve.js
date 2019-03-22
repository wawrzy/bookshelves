// @flow

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { UText } from 'Components/unit';

import './UShelve.css';

type Props = {
  isActive: boolean,
  title: string,
  value: string,
};

export default class UShelve extends PureComponent<Props> {
  render() {
    const { title, value, isActive } = this.props;

    return (
      <div className="shelve-container">
        <Link className={isActive ? 'shelveActive' : 'shelve'} to={`/${value}`}>
          <UText
            fontWeight={isActive ? 'bold' : 500}
            fontSize={15}
            color="#27314C"
          >
            {title}
          </UText>
        </Link>
      </div>
    );
  }
}
