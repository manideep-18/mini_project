import React, { Component } from 'react';
import ReactLoader from 'react-loader-spinner';

interface Props {
  type?: any;
  color?: string;
  height?: number;
  width?: number;
}

class Loader extends React.Component<Props> {
  static defaultProps = {
    type: 'Oval',
    color: '#00BFFF',
    height: 50,
    width: 50,
  };

  render() {
    const { type, color, height, width, ...other } = this.props;
    return (
      <ReactLoader
        type={type}
        color={color}
        height={height}
        width={width}
        {...other}
      />
    );
  }
}

export default Loader;
