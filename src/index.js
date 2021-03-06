import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { store } from './app/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
