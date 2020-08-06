import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import BaseInput from '.';

describe('Base Input test cases', () => {
  it('should test value entered', () => {
    const onChangeMockFunction = jest.fn();
    const { getByTestId } = render(
      <BaseInput id='textInput' value='' onChange={onChangeMockFunction} />
    );
    fireEvent.change(getByTestId('textInput'), { target: { value: 'input' } });
    expect(onChangeMockFunction).toBeCalled();
  });
});
