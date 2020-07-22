import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Header from '../../../../Common/components/Header';

import { MainContainer } from './styledComponents';
import TabsStore from '../../../stores/TabsStore';
import LandingSection from '../../../components/UsersData/LandingSection';

interface Props {
  tabsStore: TabsStore;
}

@inject('tabsStore')
@observer
export class HomePage extends Component<Props> {
  render() {
    const { tabsStore } = this.props;
    return (
      <MainContainer id='usersHomePage'>
        <Header />
        <LandingSection tabsStore={tabsStore} />
      </MainContainer>
    );
  }
}

export default HomePage;
