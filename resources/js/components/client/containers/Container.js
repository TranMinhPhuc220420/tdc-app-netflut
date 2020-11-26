import React from 'react';
import Router from '../router/Router';
import { BrowserRouter } from "react-router-dom";

export default (props) => {

  //return content component
  return (
    <BrowserRouter>
      <Router dataFilm={props.dataFilm}/>
    </BrowserRouter>
  );
}
