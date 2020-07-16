import TabsStore from '../../Admin/stores/TabsStore';
import ResourcesStore from '../../Admin/stores/ResourcesStore';
import ResourceFetchServiceFixture from '../../Admin/services/ResourceFetchService/index.fixture';

const tabsStore = new TabsStore();

const resourcesStore = new ResourcesStore(new ResourceFetchServiceFixture());

export default { tabsStore, resourcesStore };
