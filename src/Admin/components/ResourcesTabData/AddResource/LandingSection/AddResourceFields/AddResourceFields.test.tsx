import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import AddResourceFields from '.';

describe('Add Resource Fields test cases', () => {
  it('should test all values are filled when creating new resource', () => {
    const onCreateResourceCallBack = jest.fn();

    const { getByTestId } = render(
      <AddResourceFields onAddResource={onCreateResourceCallBack} />
    );

    fireEvent.change(getByTestId('name'), { target: { value: 'test' } });
    fireEvent.change(getByTestId('link'), { target: { value: 'test' } });
    fireEvent.change(getByTestId('description'), { target: { value: 'test' } });
    fireEvent.click(getByTestId('createButton'));

    expect(onCreateResourceCallBack).toBeCalled();
  });
});
