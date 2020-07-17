import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import BaseTextArea from '.';

describe('Base Text Area Component', () => {
  it('it should test onChange function called when text enters', () => {
    const onChangeMockFunction = jest.fn();
    const { getByTestId } = render(
      <BaseTextArea
        id='base-text-area'
        value=''
        onChange={onChangeMockFunction}
      />
    );

    fireEvent.change(getByTestId('base-text-area'), {
      target: { value: 'test' },
    });
    expect(onChangeMockFunction).toBeCalled();
  });
});
