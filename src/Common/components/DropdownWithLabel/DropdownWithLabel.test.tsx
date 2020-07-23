import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import DropdownWithLabel from '.';

describe('DropdownWithLabel test case', () => {
  it('should test onChange callback called when any option clicked', () => {
    const onChangeMockFunction = jest.fn();
    const { getByTestId } = render(
      <DropdownWithLabel onChange={onChangeMockFunction} />
    );

    fireEvent.change(getByTestId('customSelect'), { target: { value: 'ASC' } });
    expect(onChangeMockFunction).toBeCalled();
  });
});
