import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import SearchBarAndSort from '.';

describe('SearchBarAndSort component test cases', () => {
  it('should test search bar function callback called when enter pressed', () => {
    const onEnterPressMockFunction = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBarAndSort onEnterPress={onEnterPressMockFunction} />
    );

    fireEvent.keyUp(getByPlaceholderText('Search'), {
      key: 'Enter',
      code: 'Enter',
    });

    expect(onEnterPressMockFunction).toBeCalled();
  });

  it('should test sortStatus callback called when sortStatus updated', () => {
    const onSortStatusUpdateMockFunction = jest.fn();
    const { getByTestId } = render(
      <SearchBarAndSort onSortStatusUpdate={onSortStatusUpdateMockFunction} />
    );

    fireEvent.change(getByTestId('customSelect'), {
      target: { value: 'Ascending' },
    });

    expect(onSortStatusUpdateMockFunction).toBeCalled();
  });
});
