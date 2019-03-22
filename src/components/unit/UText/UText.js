// @flow

import React, { PureComponent } from 'react';

type Props = {
  fontSize: number,
  fontWeight?: number | 'bold',
  textTransform?: 'lowercase' | 'uppercase',
  children: any,
  color: string,
  textAlign?: string,
};

export default class UText extends PureComponent<Props> {
  static defaultProps = {
    fontWeight: undefined,
    textTransform: undefined,
    textAlign: 'left',
  };

  render() {
    const {
      fontSize,
      fontWeight,
      textAlign,
      color,
      textTransform,
      children,
    } = this.props;

    return (
      <span
        style={{
          fontSize,
          fontWeight,
          textTransform,
          textAlign,
          color,
        }}
      >
        { children }
      </span>
    );
  }
}
