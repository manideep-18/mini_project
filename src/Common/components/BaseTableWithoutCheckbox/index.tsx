import React, { Component } from 'react';
import {
  CustomTable,
  CustomRow,
  CustomHeader,
  CustomColumn,
  CustomTableHeader,
  CustomTableBody,
} from './styledComponents';

import { observer } from 'mobx-react';

import { camelCase } from '../../utils/StringConversionUtils';

interface Props {
  id: string;
  headerArray: string[];
  dataArray: any[];
  onClickItemCard: (id: any) => void;
}

@observer
class BaseTableWithoutCheckbox extends Component<Props> {
  static defaultProps = {
    id: 'id',
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
    const { headerArray, dataArray, id, onClickItemCard } = this.props;

    return dataArray.map((eachData) => (
      <CustomRow
        as='tr'
        key={eachData[camelCase(id)]}
        onClick={() => {
          onClickItemCard(eachData[camelCase(id)]);
        }}
      >
        {headerArray.map((eachHeader) => (
          <CustomColumn key={eachHeader}>
            {eachData[camelCase(eachHeader)]}
          </CustomColumn>
        ))}
      </CustomRow>
    ));
  };

  render(): React.ReactNode {
    return (
      <div>
        <CustomTable>
          <CustomTableHeader>
            <CustomRow as='tr'>{this.renderHeaderRow()}</CustomRow>
          </CustomTableHeader>
          <CustomTableBody>{this.renderDataRows()}</CustomTableBody>
        </CustomTable>
      </div>
    );
  }
}

export default BaseTableWithoutCheckbox;
