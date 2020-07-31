import TabsStore from '../../Admin/stores/TabsStore';
import ResourcesStore from '../../Admin/stores/ResourcesStore';
import RequestsStore from '../../Admin/stores/RequestsStore';
import UsersStore from '../../Admin/stores/UsersStore';
import ResourceFetchServiceFixture from '../../Admin/services/ResourceFetchService/index.fixture';
import RequestsFetchServiceFixture from '../../Admin/services/RequestsFetchService/index.fixture';
import UsersFetchServiceFixture from '../../Admin/services/UsersFetchService/index.fixture';
import TabsSwitchStore from '../../User/stores/TabsSwitchStore';
import MyRequestsFetchServiceFixture from '../../User/services/MyRequestsFetchService/index.fixture';
import MyRequestsStore from '../../User/stores/MyRequestsStore';
import MyResourcesStore from '../../User/stores/MyResourcesStore';
import MyResourcesFetchServiceFixture from '../../User/services/MyResourcesFetchService/index.fixture';
import UserStore from '../../UserProfile/stores/UserStore';
import UserServiceFixture from '../../UserProfile/services/UserService/index.fixture';

const tabsStore = new TabsStore();

const resourcesStore = new ResourcesStore(new ResourceFetchServiceFixture());

const requestsStore = new RequestsStore(new RequestsFetchServiceFixture());

const usersStore = new UsersStore(new UsersFetchServiceFixture());

const tabsSwitchStore = new TabsSwitchStore();

const myRequestsStore = new MyRequestsStore(
  new MyRequestsFetchServiceFixture()
);

const myResourcesStore = new MyResourcesStore(
  new MyResourcesFetchServiceFixture()
);

const userStore = new UserStore(new UserServiceFixture());

export default {
  tabsStore,
  resourcesStore,
  requestsStore,
  usersStore,
  tabsSwitchStore,
  myRequestsStore,
  myResourcesStore,
  userStore,
};
