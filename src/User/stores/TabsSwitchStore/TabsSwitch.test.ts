import TabsSwitchStore from '.';

const tabsSwitchStore = new TabsSwitchStore();

describe('TabsStore test cases', () => {
  it('should test initial tabStatus is My Resources', () => {
    const { tabStatus } = tabsSwitchStore;
    expect(tabStatus).toEqual('My Resources');
  });

  it('should test tabStatus when it updated with My Requests', () => {
    const { updateTabStatus } = tabsSwitchStore;
    updateTabStatus('My Requests');
    expect(tabsSwitchStore.tabStatus).toEqual('My Requests');
  });
});
