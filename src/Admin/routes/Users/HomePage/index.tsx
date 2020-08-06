import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { History } from 'history';

import Header from '../../../../Common/components/Header';

import { MainContainer } from './styledComponents';
import TabsStore from '../../../stores/TabsStore';
import LandingSection from '../../../components/UsersData/LandingSection';
import UsersStore from '../../../stores/UsersStore';

interface Props {
  history: History;
  location: any;
  match: any;
  tabsStore: TabsStore;
  usersStore: UsersStore;
}

@inject('tabsStore', 'usersStore')
@observer
export class UsersHomePage extends Component<Props> {
  render(): React.ReactNode {
    const { tabsStore, usersStore, history } = this.props;
    return (
      <MainContainer id='usersHomePage'>
        <Header />
        <LandingSection
          history={history}
          tabsStore={tabsStore}
          usersStore={usersStore}
        />
      </MainContainer>
    );
  }
}

export default withRouter(UsersHomePage);
