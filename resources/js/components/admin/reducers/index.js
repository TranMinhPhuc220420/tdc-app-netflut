import {combineReducers} from 'redux';

import dataTypeFilm from './typeFilm'
import menu from './menu'

const NETFLUT_DATA = combineReducers({
  menu: menu,
  typeFilm: dataTypeFilm
});

export default NETFLUT_DATA;
