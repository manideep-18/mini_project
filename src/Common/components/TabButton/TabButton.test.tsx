import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TabButton from '.';

describe('Tab Button Component', () => {
  it('should test onclick callback function when clicked tab button', () => {
    const onClickCallbackMockFunction = jest.fn();
    const { getByTestId } = render(
      <TabButton text='resources' onClick={onClickCallbackMockFunction} />
    );

    fireEvent.click(getByTestId('tab-button'));
    expect(onClickCallbackMockFunction).toBeCalled();
  });
});
