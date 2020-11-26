import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './AppClient.scss';

import Container from '../client/containers/Container'

export const AppClient = () => {
  const [dataFilm, setDataFilm] = useState({
    loaded: false,
    data: []
  });
  useEffect(() => {
    function handleStatusChange(response) {
      setDataFilm({
        loaded: true,
        data: response.data
      });
    }

    if (!dataFilm.loaded) {
      axios.get('api/get/video/all')
        .then(response => {
          handleStatusChange(response);
        })
        .catch(error => {
          // console.log(error);
        });
    }
  });

  return (
    <div>
      <Container dataFilm={dataFilm}/>
    </div>
  )
};

if (document.getElementById('root')) {
  ReactDOM.render(<AppClient/>, document.getElementById('root'));
}
