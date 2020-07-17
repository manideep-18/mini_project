import React, { Component } from 'react';
import {
  CustomTable,
  CustomRow,
  CustomHeader,
  CustomColumn,
} from './styledComponents';

interface Props {
  headerArray: string[];
  dataArray: any[];
}

class BaseTable extends Component<Props> {
  static defaultProps = {
    headerArray: ['title', 'description', 'link'],
    dataArray: [
      {
        title: 'iB Studio Trainings',
        description: 'This channel is for iB Studio trainees.',
        link: 'www.slack.iB studio.com',
      },
      {
        title: 'TAP Team',
        description: 'This channel is for TAP trainees',
        link: 'www.slack.TAP.com',
      },
      {
        title: 'Adaptive Engine',
        description: 'This channel for Adaptive Engine team',
        link: 'www.slack.AE.com',
      },
    ],
  };

  renderHeaderRow = () => {
    const { headerArray } = this.props;

    return headerArray.map((eachHeader) => (
      <CustomHeader>{eachHeader}</CustomHeader>
    ));
  };

  renderDataRows = () => {
    const { headerArray, dataArray } = this.props;

    return dataArray.map((eachData) => (
      <CustomRow as='tr'>
        <CustomColumn>
          {' '}
          <input type='checkbox' />
        </CustomColumn>
        {headerArray.map((eachHeader) => (
          <CustomColumn>{eachData[eachHeader]}</CustomColumn>
        ))}
      </CustomRow>
    ));
  };

  render() {
    return (
      <div>
        <CustomTable>
          <CustomRow as='tr'>
            <CustomHeader></CustomHeader>
            {this.renderHeaderRow()}
          </CustomRow>
          {this.renderDataRows()}
        </CustomTable>
      </div>
    );
  }
}

export default BaseTable;
