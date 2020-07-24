import TabsStore from '.';

const tabsStore = new TabsStore();

describe('tabs store test cases', () => {
  it('should test initial tab status', () => {
    expect(tabsStore.tabStatus).toBe('Resources');
  });

  it('should test tab status after clicking users tab', () => {
    tabsStore.updateTabStatus('Users');
    expect(tabsStore.tabStatus).toBe('Users');
  });
});
