import React, { Component } from 'react';

import {
  MainContainer,
  IbhubsLogo,
  ProfileImage,
  ImagesContainer,
  HeaderResponsiveContainer,
} from './styledComponents';
import ResponsiveContainer from '../ResponsiveContainer';

interface Props {
  logoUrl: string;
  logoAltText: string;
  profileImageUrl: string;
  profileImageAltText: string;
}

export class Header extends Component<Props> {
  static defaultProps = {
    logoUrl:
      'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/ae7d395b-d459-40c8-899a-14914d2c4189.svg',
    logoAltText: 'ibhubs logo',
    profileImageUrl:
      'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/663af104-79df-45bf-8042-6ebb63e51caa@3x.png',
    profileImageAltText: 'profile image',
  };

  render() {
    const {
      logoUrl,
      logoAltText,
      profileImageUrl,
      profileImageAltText,
    } = this.props;
    return (
      <MainContainer>
        <HeaderResponsiveContainer>
          <ImagesContainer>
            <IbhubsLogo src={logoUrl} alt={logoAltText} />
            <ProfileImage src={profileImageUrl} alt={profileImageAltText} />
          </ImagesContainer>
        </HeaderResponsiveContainer>
      </MainContainer>
    );
  }
}

export default Header;
