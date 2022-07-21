import React from 'react';
import * as ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// import gon from 'gon';

import { rootReducer } from './slices';
import { App } from './App.jsx';

export default () => {
  const store = configureStore({
    reducer: rootReducer,
  });

  // store.dispatch(setupState(gon));
  const rootNode = document.getElementById('main');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , rootNode);
};
