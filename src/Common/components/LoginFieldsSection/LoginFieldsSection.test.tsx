import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import LoginFieldsSection from '.';

describe('LoginFieldsSection test cases', () => {
  it('should test create button callback called when all fields are filled', () => {
    const onLoginClickMockFunction = jest.fn();
    const { getByPlaceholderText, getByTestId } = render(
      <LoginFieldsSection onLoginClick={onLoginClickMockFunction} />
    );

    fireEvent.change(getByPlaceholderText('user name'), {
      target: { value: 'test' },
    });

    fireEvent.change(getByPlaceholderText('password'), {
      target: { value: 'test' },
    });

    fireEvent.click(getByTestId('loginButton'));

    expect(onLoginClickMockFunction).toBeCalled();
  });
});
