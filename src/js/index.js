import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { loadTracks } from './actions/trackActions';
import Routes from './routes';

import '../scss/main.scss';

const store = configureStore();
store.dispatch(loadTracks());

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app'),
);
