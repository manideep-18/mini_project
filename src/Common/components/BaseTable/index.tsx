import React, { Component } from 'react';
import {
  CustomTable,
  CustomRow,
  CustomHeader,
  CustomColumn,
  CustomTableHeader,
  CustomTableBody,
} from './styledComponents';
import BaseCheckBox from '../BaseCheckbox';
import { observer } from 'mobx-react';
import { ResourceItemType } from '../../../Admin/stores/types';

interface Props {
  headerArray: string[];
  dataArray: any[];
  onChangeCheckbox: (value: any, checked: boolean) => void;
}

@observer
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
      <CustomHeader key={eachHeader}>{eachHeader}</CustomHeader>
    ));
  };

  renderDataRows = () => {
    const { headerArray, dataArray, onChangeCheckbox } = this.props;

    return dataArray.map((eachData) => (
      <CustomRow as='tr' key={eachData.id}>
        <CustomColumn>
          {' '}
          <BaseCheckBox
            eachData={eachData}
            value=''
            onChange={onChangeCheckbox}
          />
        </CustomColumn>
        {headerArray.map((eachHeader) => (
          <CustomColumn key={eachHeader}>{eachData[eachHeader]}</CustomColumn>
        ))}
      </CustomRow>
    ));
  };

  render() {
    return (
      <div>
        <CustomTable>
          <CustomTableHeader>
            <CustomRow as='tr'>
              <CustomHeader></CustomHeader>
              {this.renderHeaderRow()}
            </CustomRow>
          </CustomTableHeader>
          <CustomTableBody>{this.renderDataRows()}</CustomTableBody>
        </CustomTable>
      </div>
    );
  }
}

export default BaseTable;
