import React, { Component } from 'react';

import { MainContainer } from './styledComponents';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export class ResponsiveContainer extends Component<Props> {
  render() {
    const { className, children } = this.props;
    return <MainContainer className={className}>{children}</MainContainer>;
  }
}

export default ResponsiveContainer;
