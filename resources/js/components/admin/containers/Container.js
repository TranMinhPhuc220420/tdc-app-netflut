import React from 'react';
import {useDispatch} from 'react-redux';
//components
import Footer from '../components/blocks/footer/Footer';
import Router from '../router/Router';
import Navbar from '../components/blocks/navbar/Navbar';
//actions
import {setTypeFilm} from '../actions'
//Model
import TypeFilmModel from '../model/TypeFilmModel';

export default () => {
  const dispatch = useDispatch();

  TypeFilmModel.getAll((data) => {
    dispatch(setTypeFilm(data));
  });

  //return content component
  return (
    <div>
      <Navbar/>
      <Router/>
      <Footer/>
    </div>
  );
}
