import React from 'react';

import TabsStore from '.';

const tabsStore = new TabsStore();

describe('tabs store test cases', () => {
  it('should test initial tab status', async () => {
    expect(tabsStore.tabStatus).toBe('Resources');
  });

  it('should test tab status after clicking users tab', async () => {
    await tabsStore.updateTabStatus('Users');
    expect(tabsStore.tabStatus).toBe('Users');
  });
});
