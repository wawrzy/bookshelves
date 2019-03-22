// @flow

import React, { PureComponent } from 'react';

import { UText } from 'Components/unit';

import './UTag.css';


type Props = {
  type: string,
  content: string,
  contentColor: string;
};

export default class UTag extends PureComponent<Props> {
  render() {
    const { content, contentColor, type } = this.props;

    return (
      <div className={`tag tag-${type}`}>
        <UText
          color={contentColor}
          fontWeight={900}
          fontSize={13}
        >
          {content}
        </UText>
      </div>
    );
  }
}
