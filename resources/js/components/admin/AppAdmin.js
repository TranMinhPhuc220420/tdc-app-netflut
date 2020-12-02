import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import NETFLUT_DATA from './reducers'

import Container from './containers/Container';
import './AppAdmin.scss';

export const AppAdmin = () => {

  const store = createStore(NETFLUT_DATA,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Container/>
      </Provider>
    </BrowserRouter>
  )
};

if (document.getElementById('wrapper')) {
  ReactDOM.render(<AppAdmin/>, document.getElementById('wrapper'));
}
