import React, { Component } from 'react';
import { History } from 'history';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Header from '../../../Common/components/Header';

import HeadingButtonsSection from '../../components/HeadingButtonsSection';
import UserStore from '../../stores/UserStore';

import { MainContainer } from './styledComponents';

interface Props {
  history: History;
  match: any;
  location: any;
  userStore: UserStore;
}

@inject('userStore')
@observer
class HomePage extends Component<Props> {
  render() {
    const { userStore, history } = this.props;
    return (
      <MainContainer id='loginHomePage'>
        <Header />
        <HeadingButtonsSection history={history} userStore={userStore} />
      </MainContainer>
    );
  }
}

export default withRouter(HomePage);
