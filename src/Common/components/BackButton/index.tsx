import React, { Component } from 'react';

import { ADMIN_RESOURCES_PAGE } from '../../constants/RouteConstants';

import {
  IconTextContainer,
  BackLink,
  IconImage,
  BackText,
} from './styledComponents';

interface Props {
  backLinkText: string;
  iconImageUrl: string;
  backText: string;
}

class BackButton extends Component<Props> {
  static defaultProps = {
    backLinkText: ADMIN_RESOURCES_PAGE,
    iconImageUrl:
      'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/264598fb-d62c-49a3-87c9-c8d06c355d85.svg',
    backText: 'Resources',
  };

  render(): React.ReactNode {
    const { backLinkText, iconImageUrl, backText } = this.props;
    return (
      <IconTextContainer>
        <BackLink to={backLinkText}>
          <IconImage src={iconImageUrl} alt='prev-arrow icon' />
        </BackLink>
        <BackText>{backText}</BackText>
      </IconTextContainer>
    );
  }
}

export default BackButton;
