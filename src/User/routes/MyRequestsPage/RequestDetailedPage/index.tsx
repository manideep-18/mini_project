import React, { Component } from 'react';
import Header from '../../../../Common/components/Header';
import { withRouter } from 'react-router-dom';
import { History } from 'history';
import { inject, observer } from 'mobx-react';
import MyRequestsStore from '../../../stores/MyRequestsStore';
import RequestDetails from '../../../components/MyRequests/RequestDetails';

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

  render() {
    let url;
    if (typeof window !== 'undefined') {
      url = window.location.pathname;
      const pathParameters = url.split('/');
      this.requestingStatus = pathParameters[pathParameters.length - 2];
      this.requestingId = pathParameters[pathParameters.length - 1];
    }
    const { myRequestsStore } = this.props;
    return (
      <div>
        <Header />
        <RequestDetails
          requestingStatus={this.requestingStatus}
          requestingId={this.requestingId}
          myRequestsStore={myRequestsStore}
        />
      </div>
    );
  }
}

export default withRouter(RequestDetailedPage);
