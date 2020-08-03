import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { History } from 'history';

import Header from '../../../../Common/components/Header';

import MyRequestsStore from '../../../stores/MyRequestsStore';
import RequestDetails from '../../../components/MyRequests/RequestDetails';

import { RequestDetailsContainer } from './styledComponents';

interface Props {
  history: History;
  match: any;
  location: any;
  myRequestsStore: MyRequestsStore;
}

@inject('myRequestsStore')
@observer
export class RequestDetailedPage extends Component<Props> {
  requestingStatus: string;
  requestingId: string;

  constructor(props: Props) {
    super(props);
    this.requestingStatus = '';
    this.requestingId = '';
  }

  render(): React.ReactNode {
    let url;
    if (typeof window !== 'undefined') {
      url = window.location.pathname;
      const pathParameters = url.split('/');
      this.requestingStatus = pathParameters[pathParameters.length - 2];
      this.requestingId = pathParameters[pathParameters.length - 1];
    }

    const { myRequestsStore, history } = this.props;
    return (
      <RequestDetailsContainer>
        <Header />
        <RequestDetails
          history={history}
          requestingStatus={this.requestingStatus}
          requestingId={this.requestingId}
          myRequestsStore={myRequestsStore}
        />
      </RequestDetailsContainer>
    );
  }
}

export default withRouter(RequestDetailedPage);
