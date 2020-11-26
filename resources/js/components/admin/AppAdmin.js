import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";

import Container from './containers/Container';
import './AppAdmin.scss';

export const AppAdmin = () => {
  return (
    <BrowserRouter>
      <Container/>
    </BrowserRouter>
  )
};

if (document.getElementById('wrapper')) {
  ReactDOM.render(<AppAdmin/>, document.getElementById('wrapper'));
}
