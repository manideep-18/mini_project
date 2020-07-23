import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { camelCase } from '../../../Admin/utils/stringConversionUtils';

import BaseCheckBox from '../BaseCheckbox';

import {
  CustomTable,
  CustomRow,
  CustomHeader,
  CustomColumn,
  CustomTableHeader,
  CustomTableBody,
} from './styledComponents';

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
        id: 1,
        title: 'iB Studio Trainings',
        description: 'This channel is for iB Studio trainees.',
        link: 'www.slack.iB studio.com',
      },
      {
        id: 2,
        title: 'TAP Team',
        description: 'This channel is for TAP trainees',
        link: 'www.slack.TAP.com',
      },
      {
        id: 3,
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
            eachDataId={eachData.id}
            value=''
            onChange={onChangeCheckbox}
          />
        </CustomColumn>
        {headerArray.map((eachHeader) => (
          <CustomColumn key={eachHeader}>
            {eachData[camelCase(eachHeader)]}
          </CustomColumn>
        ))}
      </CustomRow>
    ));
  };

  render() {
    return (
      <CustomTable>
        <CustomTableHeader>
          <CustomRow as='tr'>
            <CustomHeader></CustomHeader>
            {this.renderHeaderRow()}
          </CustomRow>
        </CustomTableHeader>
        <CustomTableBody>{this.renderDataRows()}</CustomTableBody>
      </CustomTable>
    );
  }
}

export default BaseTable;
