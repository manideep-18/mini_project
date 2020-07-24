import React, { Component } from 'react';
import { MainContainer } from './styledComponents';
import Header from '../../../Common/components/Header';
import LandingSection from '../../components/MyResources/LandingSection';
import { inject, observer } from 'mobx-react';
import TabsSwitchStore from '../../stores/TabsSwitchStore';
import { withRouter } from 'react-router-dom';
import { History } from 'history';

interface Props {
  history: History;
  match: any;
  location: any;
  tabsSwitchStore: TabsSwitchStore;
}

@inject('tabsSwitchStore')
@observer
export class MyResourcesPage extends Component<Props> {
  render() {
    const { tabsSwitchStore, history } = this.props;
    return (
      <MainContainer id='myResourcesHomePage'>
        <Header />
        <LandingSection history={history} tabsSwitchStore={tabsSwitchStore} />
      </MainContainer>
    );
  }
}

export default withRouter(MyResourcesPage);
