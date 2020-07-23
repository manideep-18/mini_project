import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BaseCheckBox from '.';

describe('BaseCheckbox test cases', () => {
  let onChangeMockFunction: any;
  beforeEach(() => {
    onChangeMockFunction = jest.fn();
  });

  it('should test onChange callback function called after clicking checkbox', () => {
    const { getByTestId } = render(
      <BaseCheckBox value='' onChange={onChangeMockFunction} />
    );

    fireEvent.click(getByTestId('customCheckbox'));
    expect(onChangeMockFunction).toBeCalled();
  });
});
