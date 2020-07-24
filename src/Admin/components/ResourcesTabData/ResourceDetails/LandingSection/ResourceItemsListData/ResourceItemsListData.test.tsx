import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import ResourceItemsListData from '.';

describe('ResourceItemsListData component test cases', () => {
  it('should test  call back function is called when add button clicked', () => {
    const onAddResourceItemMockFunction = jest.fn();

    const { getAllByTestId } = render(
      <ResourceItemsListData
        onAddResourceItem={onAddResourceItemMockFunction}
      />
    );

    fireEvent.click(getAllByTestId('customButton')[0]);
    expect(onAddResourceItemMockFunction).toBeCalled();
  });

  it('should test  call back function is not called when delete button clicked initially', () => {
    const onDeleteResourceItemsMockFunction = jest.fn();

    const { getAllByTestId } = render(
      <ResourceItemsListData
        onDeleteResourceItems={onDeleteResourceItemsMockFunction}
      />
    );

    fireEvent.click(getAllByTestId('customButton')[1]);
    expect(onDeleteResourceItemsMockFunction).toBeCalledTimes(0);
  });
});
