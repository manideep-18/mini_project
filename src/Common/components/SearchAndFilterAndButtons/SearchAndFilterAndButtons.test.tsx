import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import SearchAndFilterAndButtons from '.';

describe('SearchAndFilterAndButtons test cases', () => {
  it('should test callback function called when onSearchEnter function called ', () => {
    const onSearchEnterCallbackFunction = jest.fn();
    const { getByTestId } = render(
      <SearchAndFilterAndButtons
        onSearchEnter={onSearchEnterCallbackFunction}
      />
    );

    fireEvent.change(getByTestId('customSearchBar'), {
      target: { value: 'test' },
    });
    fireEvent.keyUp(getByTestId('customSearchBar'), {
      key: 'Enter',
      code: 'Enter',
    });

    expect(onSearchEnterCallbackFunction).toBeCalled();
  });

  it('should test sort status updated when dropdown of sort value changed', () => {
    const onSortUpdateMockFunction = jest.fn();
    const { getByText } = render(
      <SearchAndFilterAndButtons
        onSortStatusUpdate={onSortUpdateMockFunction}
      />
    );

    fireEvent.change(getByText('SORT'), { target: { value: 'Resource' } });
    expect(getByText('Resource')).toBeDefined();
  });

  it('should test filter status updated when dropdown of filter value changed', () => {
    const onFilterUpdateMockFunction = jest.fn();
    const { getByText } = render(
      <SearchAndFilterAndButtons
        onSortStatusUpdate={onFilterUpdateMockFunction}
      />
    );

    fireEvent.change(getByText('FILTER'), { target: { value: 'bitbucket' } });
    expect(getByText('bitbucket')).toBeDefined();
  });
});
