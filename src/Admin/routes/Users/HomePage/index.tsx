import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Header from '../../../../Common/components/Header';

import { MainContainer } from './styledComponents';
import TabsStore from '../../../stores/TabsStore';
import LandingSection from '../../../components/UsersData/LandingSection';
import UsersStore from '../../../stores/UsersStore';

interface Props {
  tabsStore: TabsStore;
  usersStore: UsersStore;
}

@inject('tabsStore', 'usersStore')
@observer
export class HomePage extends Component<Props> {
  render() {
    const { tabsStore, usersStore } = this.props;
    return (
      <MainContainer id='usersHomePage'>
        <Header />
        <LandingSection tabsStore={tabsStore} usersStore={usersStore} />
      </MainContainer>
    );
  }
}

export default HomePage;
