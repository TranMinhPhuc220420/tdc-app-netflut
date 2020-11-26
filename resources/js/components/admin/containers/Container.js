import React from 'react';
import Footer from '../components/blocks/footer/Footer';
import Router from '../router/Router';
import Navbar from '../components/blocks/navbar/Navbar';

export default () => {
  //remove loading page or components
  setTimeout(function () {
    document.querySelector('body').classList.remove('loading');
    document.querySelector('#splash').classList.remove('show');
  }, 2000);

  //resize for navigation left main
  window.addEventListener('resize', () => {
    let maxWidth = document.documentElement.clientWidth;
    if (maxWidth <= 992) {
      document.querySelector('body').classList.add('sidebar-collapse');
    } else {
      document.querySelector('body').classList.remove('sidebar-collapse');
    }
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
