import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import FailureView from '.';

describe('Failure View Test cases', () => {
  it('should test onRetry function called', () => {
    const onRetryMockFunction = jest.fn();
    const { getByTestId } = render(
      <FailureView failureText='page not found' onRetry={onRetryMockFunction} />
    );
    fireEvent.click(getByTestId('retry'));
    expect(onRetryMockFunction).toBeCalled();
  });
});
