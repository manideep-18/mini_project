import React, { Component } from 'react';
import MyRequestsStore from '../../../stores/MyRequestsStore';

interface Props {
  myRequestsStore: MyRequestsStore;
}

export class RequestDetails extends Component<Props> {
  componentDidMount() {
    const { myRequestsStore } = this.props;
    console.log(myRequestsStore.myRequestsDataFetched, '&&&&');
  }
  render() {
    return <div></div>;
  }
}

export default RequestDetails;
