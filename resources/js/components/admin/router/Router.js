import React from 'react';
import {Route, Switch} from 'react-router-dom';
//pages
import Home from '../pages/home/Home';

function Router () {
  return (
    <Switch>
      <Route path="/admin" component={Home} />
    </Switch>
  );
}
export default Router;