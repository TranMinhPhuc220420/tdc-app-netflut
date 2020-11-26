import React from 'react';
import {Route, Switch} from 'react-router-dom';

//pages
import HomeMain from '../pages/HomeMain/HomeMain';

function Router (props) {
  return (
    <Switch>
      <Route path="/" component={HomeMain} />
    </Switch>
  );
}
export default Router;
