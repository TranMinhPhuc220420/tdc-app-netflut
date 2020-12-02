import React from 'react';
import {Route, Switch} from 'react-router-dom';
//pages
import Home from '../pages/home/Home';
import CategoryType from "../pages/categoryType";
import Category from "../pages/category";

function Router () {
  return (
    <Switch>
      <Route path="/admin" component={Home} exact/>
      <Route path="/admin/category" component={Category} exact/>
      <Route path="/admin/category-type" component={CategoryType} exact/>
    </Switch>
  );
}
export default Router;
