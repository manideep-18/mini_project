import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import CustomModal from '.';

describe('Common Modal test cases', () => {
  it('should test cancel callback function when cancel button clicked', () => {
    const cancelCallbackMockFunction = jest.fn();
    const { getByText } = render(
      <CustomModal
        modalStatus={true}
        onCancelClick={cancelCallbackMockFunction}
      />
    );

    fireEvent.click(getByText('cancel'));
    expect(cancelCallbackMockFunction).toBeCalled();
  });

  it('should test Ok function callback  when Ok button clicked', () => {
    const okCallbackMockFunction = jest.fn();
    const { getByText } = render(
      <CustomModal modalStatus={true} onOkClick={okCallbackMockFunction} />
    );

    fireEvent.click(getByText('Ok'));
    expect(okCallbackMockFunction).toBeCalled();
  });

  it('should test reject callback function when reject button clicked', () => {
    const rejectCallbackMockFunction = jest.fn();
    const { getByText } = render(
      <CustomModal
        isRejectActive
        modalStatus={true}
        onRejectClick={rejectCallbackMockFunction}
      />
    );

    fireEvent.click(getByText('Reject'));
    expect(rejectCallbackMockFunction).toBeCalled();
  });
});
