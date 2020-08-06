import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ResourceItemsFields from '.';

describe('Add Resource Fields test cases', () => {
  it('should test all values are filled when creating new resource', () => {
    const onCreateResourceCallBack = jest.fn();

    const { getByTestId } = render(
      <ResourceItemsFields
        onAddItemToResource={onCreateResourceCallBack}
        resourceName='Slack'
      />
    );

    fireEvent.change(getByTestId('itemName'), { target: { value: 'test' } });
    fireEvent.change(getByTestId('itemLink'), { target: { value: 'test' } });
    fireEvent.change(getByTestId('itemDescription'), {
      target: { value: 'test' },
    });
    fireEvent.click(getByTestId('createButton'));

    expect(onCreateResourceCallBack).toBeCalled();
  });
});
