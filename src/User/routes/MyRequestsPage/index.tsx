import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { History } from 'history';

import Header from '../../../Common/components/Header';

import TabsSwitchStore from '../../stores/TabsSwitchStore';
import LandingSection from '../../components/MyRequests/LandingSection';
import MyRequestsStore from '../../stores/MyRequestsStore';

import { MainContainer } from './styledComponents';

interface Props {
  history: History;
  match: any;
  location: any;
  tabsSwitchStore: TabsSwitchStore;
  myRequestsStore: MyRequestsStore;
}

@inject('tabsSwitchStore', 'myRequestsStore')
@observer
export class MyResourcesPage extends Component<Props> {
  render(): React.ReactNode {
    const { tabsSwitchStore, myRequestsStore, history } = this.props;
    return (
      <MainContainer id='userHomePage'>
        <Header />
        <LandingSection
          history={history}
          tabsSwitchStore={tabsSwitchStore}
          myRequestsStore={myRequestsStore}
        />
      </MainContainer>
    );
  }
}

export default withRouter(MyResourcesPage);
