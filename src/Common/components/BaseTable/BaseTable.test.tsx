import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import BaseTable from '.';

describe('BaseTable test cases', () => {
  let onClickedCheckBoxMockFunction: any;

  beforeEach(() => {
    onClickedCheckBoxMockFunction = jest.fn();
  });

  it('should test checkbox call back is called when checkbox is clicked', () => {
    const { getAllByTestId } = render(
      <BaseTable onChangeCheckbox={onClickedCheckBoxMockFunction} />
    );

    fireEvent.click(getAllByTestId('customCheckbox')[0]);
    expect(onClickedCheckBoxMockFunction).toBeCalled();
  });

  it('should test first checkbox value after clicking first checkbox', () => {
    const { getAllByTestId } = render(
      <BaseTable onChangeCheckbox={onClickedCheckBoxMockFunction} />
    );

    fireEvent.click(getAllByTestId('customCheckbox')[0]);
    expect(getAllByTestId('customCheckbox')[0].checked).toEqual(true);
  });
});
