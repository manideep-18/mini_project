import React, { Component } from 'react';
import Header from '../../../../Common/components/Header';
import { withRouter } from 'react-router-dom';
import { History } from 'history';
import { inject } from 'mobx-react';
import MyRequestsStore from '../../../stores/MyRequestsStore';
import RequestDetails from '../../../components/MyRequests/RequestDetails';

interface Props {
  history: History;
  match: any;
  location: any;
  myRequestsStore: MyRequestsStore;
}

@inject('myRequestsStore')
export class RequestDetailedPage extends Component<Props> {
  render() {
    const { myRequestsStore } = this.props;
    return (
      <div>
        <Header />
        <RequestDetails myRequestsStore={myRequestsStore} />
      </div>
    );
  }
}

export default withRouter(RequestDetailedPage);
