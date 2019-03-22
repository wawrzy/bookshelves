// @flow

import React, { Component } from 'react';

import { UText, UShelve } from 'Components/unit';
import type { Shelve } from 'Types/shelve';

import './SListShelves.css';


type Props = {
  shelves: Array<Shelve>,
  current: string,
};

export default class SListShelves extends Component<Props> {
  render() {
    const { shelves } = this.props;

    return (
      <div id="SListShelves" className="container-padding">
        <UText
          fontSize={13}
          fontWeight={900}
          textTransform="uppercase"
          color="#8FA3BF"
        >
          Shelves
        </UText>
        {shelves.map(this.renderShelve)}
      </div>
    );
  }

  renderShelve = (shelve: Object) => {
    const { current } = this.props;

    return (
      <UShelve
        key={shelve.slug}
        title={shelve.title}
        value={shelve.slug}
        isActive={shelve.slug === current}
      />
    );
  }
}
