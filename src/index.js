import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { loadDirectories } from './actions';
import store from './store';
import { LOAD_DIRECTORIES } from './constants';

import App from './containers/App';

store.dispatch(loadDirectories(LOAD_DIRECTORIES));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);