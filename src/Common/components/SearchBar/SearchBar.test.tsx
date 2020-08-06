import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import SearchBar from '.';

describe('search bar test cases', () => {
  it('should test mock function to be called when onclick enter', () => {
    const onEnterPressMockFunction = jest.fn();
    const { getByTestId } = render(
      <SearchBar onEnterPress={onEnterPressMockFunction} />
    );

    fireEvent.keyUp(getByTestId('customSearchBar'), {
      key: 'Enter',
      code: 'Enter',
    });

    expect(onEnterPressMockFunction).toBeCalled();
  });
});
