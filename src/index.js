import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { loadFiles } from './actions';
import store from './store';
import { LOAD_FILES } from './constants';

import App from './containers/App';

store.dispatch(loadFiles(LOAD_FILES));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);