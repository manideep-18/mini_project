import React, { Component } from 'react';
import MyRequestsStore from '../../../stores/MyRequestsStore';
import BackButton from '../../../../Common/components/BackButton';
import { USER_MY_REQUESTS_PAGE } from '../../../../Common/constants/RouteConstants';

import ResponsiveContainer from '../../../../Common/components/ResponsiveContainer';
import RequestingFormFields from './RequestingFormFields';
import { FormContainer } from './styledComponents';
import { observer } from 'mobx-react';
import LoadingWrapper from '../../../../Common/components/LoadingWrapper';

interface Props {
  requestingStatus: string;
  requestingId: string;
  myRequestsStore: MyRequestsStore;
}

@observer
export class RequestDetails extends Component<Props> {
  // renderForm = () => {
  //   const { requestingStatus, myRequestsStore, requestingId } = this.props;
  //   switch (requestingStatus) {
  //     case 'Rejected':
  //       return (
  //         <RequestingFormFields
  //           myRequestsStore={myRequestsStore}
  //           requestingId={requestingId}
  //         />
  //       );
  //     default:
  //       return null;
  //   }
  // };

  handleRetry = () => {};

  onSuccess = () => {};

  componentDidMount() {
    const { myRequestsStore, requestingId, requestingStatus } = this.props;
    const request = { request_id: requestingId };
    switch (requestingStatus) {
      case 'Rejected':
        myRequestsStore.getMyRequestRejectedDataAPI(request, this.onSuccess);
        break;
      case 'Pending':
        myRequestsStore.getMyRequestPendingDataAPI(request, this.onSuccess);
        break;
      default:
        myRequestsStore.getMyRequestAcceptDataAPI(request, this.onSuccess);
    }
  }
  render() {
    const { requestingStatus, myRequestsStore } = this.props;
    const {
      getMyRequestRejectedDataAPIStatus,
      getMyRequestPendingDataAPIStatus,
      getMyRequestAcceptDataAPIStatus,
    } = myRequestsStore;
    return (
      <div>
        <ResponsiveContainer>
          <BackButton
            backLinkText={USER_MY_REQUESTS_PAGE}
            backText='Requests page'
          />
          <FormContainer>
            <LoadingWrapper
              apiStatus={
                getMyRequestRejectedDataAPIStatus ||
                getMyRequestPendingDataAPIStatus ||
                getMyRequestAcceptDataAPIStatus
              }
              onRetry={this.handleRetry}
            >
              <RequestingFormFields myRequestsStore={myRequestsStore} />
            </LoadingWrapper>
          </FormContainer>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default RequestDetails;
