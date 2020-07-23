import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ResourceModal from '../../../../../stores/Modals/ResourceModal';

import EachResourceCard from '.';

describe('Resources Home Page Each Resource Card test cases', () => {
  it('should test callback function called  when resource card clicked', () => {
    const eachResourceCard: ResourceModal = {
      logoImageUrl: '',
      link: '',
      description: '',
      name: '',
      type: '',
      itemsList: [],
    };
    const onCardClickCallBackFunction = jest.fn();

    const { getByTestId } = render(
      <EachResourceCard
        eachResource={eachResourceCard}
        onClickResourceCard={onCardClickCallBackFunction}
      />
    );

    fireEvent.click(getByTestId('logoImage'));
    expect(onCardClickCallBackFunction).toBeCalled();
  });
});
