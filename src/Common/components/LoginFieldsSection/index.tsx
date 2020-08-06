import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import ResponsiveContainer from '../ResponsiveContainer';

import {
  FieldsContainer,
  UserNameInputField,
  PasswordInputField,
  LoginButton,
} from './styledComponents';

interface Props {
  onLoginClick: (userName: string, password: string) => void;
}

@observer
class LoginFieldsSection extends Component<Props> {
  @observable userName: string;
  @observable password: string;

  constructor(props: Props) {
    super(props);
    this.userName = '';
    this.password = '';
  }

  handleUserNameChange = (value: string): void => {
    this.userName = value;
  };

  handlePasswordChange = (value: string): void => {
    this.password = value;
  };

  handleLogin = (): void => {
    const { onLoginClick } = this.props;
    if (this.userName && this.password)
      onLoginClick(this.userName, this.password);
  };

  render(): React.ReactNode {
    return (
      <ResponsiveContainer>
        <FieldsContainer>
          <UserNameInputField
            value={this.userName}
            onChange={this.handleUserNameChange}
            placeholder='user name'
          />
          <PasswordInputField
            type='password'
            placeholder='password'
            value={this.password}
            onChange={this.handlePasswordChange}
          />
          <LoginButton
            id='loginButton'
            buttonText='Login'
            onClick={this.handleLogin}
          />
        </FieldsContainer>
      </ResponsiveContainer>
    );
  }
}

export default LoginFieldsSection;
