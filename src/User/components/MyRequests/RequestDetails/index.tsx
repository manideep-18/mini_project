import React, { Component } from 'react';
import { History } from 'history';
import MyRequestsStore from '../../../stores/MyRequestsStore';
import BackButton from '../../../../Common/components/BackButton';
import { USER_MY_REQUESTS_PAGE } from '../../../../Common/constants/RouteConstants';

import ResponsiveContainer from '../../../../Common/components/ResponsiveContainer';
import RequestingFormFields from './RequestingFormFields';
import { FormContainer } from './styledComponents';
import { observer } from 'mobx-react';
import LoadingWrapper from '../../../../Common/components/LoadingWrapper';
import { goToUserMyRequestsPage } from '../../../utils/NavigationUtils';

interface Props {
  history: History;
  requestingStatus: string;
  requestingId: string;
  myRequestsStore: MyRequestsStore;
}

@observer
export class RequestDetails extends Component<Props> {
  handleSubmitClick = () => {
    const { history } = this.props;
    goToUserMyRequestsPage(history);
  };

  handleRetry = () => {
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
  };

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
  render(): React.ReactNode {
    const { requestingStatus, myRequestsStore } = this.props;
    const {
      getMyRequestRejectedDataAPIStatus,
      getMyRequestPendingDataAPIStatus,
      getMyRequestAcceptDataAPIStatus,
      requestDataFetched,
    } = myRequestsStore;
    return (
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
            <RequestingFormFields
              requestingStatus={requestingStatus}
              requestDataFetched={requestDataFetched}
              onSubmitClick={this.handleSubmitClick}
            />
          </LoadingWrapper>
        </FormContainer>
      </ResponsiveContainer>
    );
  }
}

export default RequestDetails;
