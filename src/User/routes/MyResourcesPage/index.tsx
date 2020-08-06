import React, { Component } from 'react';
import { History } from 'history';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Header from '../../../Common/components/Header';

import LandingSection from '../../components/MyResources/LandingSection';
import TabsSwitchStore from '../../stores/TabsSwitchStore';
import MyResourcesStore from '../../stores/MyResourcesStore';

import { MainContainer } from './styledComponents';

interface Props {
  history: History;
  match: any;
  location: any;
  tabsSwitchStore: TabsSwitchStore;
  myResourcesStore: MyResourcesStore;
}

@inject('tabsSwitchStore', 'myResourcesStore')
@observer
export class MyResourcesPage extends Component<Props> {
  render(): React.ReactNode {
    const { tabsSwitchStore, history, myResourcesStore } = this.props;
    return (
      <MainContainer id='myResourcesHomePage'>
        <Header />
        <LandingSection
          history={history}
          tabsSwitchStore={tabsSwitchStore}
          myResourcesStore={myResourcesStore}
        />
      </MainContainer>
    );
  }
}

export default withRouter(MyResourcesPage);
