import React, { Component } from 'react';

import {
  MainContainer,
  IbhubsLogo,
  ProfileImage,
  ImagesContainer,
  HeaderResponsiveContainer,
  ButtonImageContainer,
  AddButton,
} from './styledComponents';
import ResponsiveContainer from '../ResponsiveContainer';
import Button from '../Button';
import { navigate } from '@reach/router';
import { Link } from 'react-router-dom';

interface Props {
  logoUrl: string;
  logoAltText: string;
  profileImageUrl: string;
  profileImageAltText: string;
  isAdmin?: boolean;
  tabStatus?: string;
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
      isAdmin,
      tabStatus,
    } = this.props;
    return (
      <MainContainer>
        <HeaderResponsiveContainer>
          <ImagesContainer>
            <IbhubsLogo src={logoUrl} alt={logoAltText} />
            <ButtonImageContainer>
              {isAdmin && tabStatus === 'Resources' && (
                <Link to='/admin/resources/add-resource'>
                  <AddButton buttonText='+ ADD' />
                </Link>
              )}
              <ProfileImage src={profileImageUrl} alt={profileImageAltText} />
            </ButtonImageContainer>
          </ImagesContainer>
        </HeaderResponsiveContainer>
      </MainContainer>
    );
  }
}

export default Header;
