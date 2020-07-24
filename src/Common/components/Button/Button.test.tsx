import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { API_SUCCESS } from '@ib/api-constants';

import Button from '.';

describe('Common Component Guide', () => {
  it('should test callback function calling on click', () => {
    const onClickMockFunction = jest.fn();
    const { getByTestId } = render(
      <Button
        id='commonButton'
        buttonText='Hello'
        onClick={onClickMockFunction}
        apiStatus={API_SUCCESS}
      />
    );
    fireEvent.click(getByTestId('commonButton'));
    expect(onClickMockFunction).toBeCalled();
  });
});
