import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//import { loadDirectories } from './actions';
import configureStore from './store/configureStore';

import App from './components/App';

const store = configureStore();
store.dispatch(loadDirectories());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);