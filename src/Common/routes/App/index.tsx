import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import stores from '../../stores';

import Routes from '..';

export class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <div>
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
