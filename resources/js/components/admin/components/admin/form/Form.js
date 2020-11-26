import React, { useState } from 'react';

import axios from "axios";
import Swal from 'sweetalert2'

const AdminForm = () => {
  const [nameFilm, setNameFilm] = useState(null);
  const [fileFilm, setFileFilm] = useState({
    srcLocal: '',
    fileFilm: null
  });


  const submitForm = async (event) => {
    // Stop event submit
    event.preventDefault();

    // get value
    const data = new FormData();
    if (fileFilm.fileFilm != null) {
      data.append('nameFilmRaw', nameFilm.toLowerCase() //Low case name file film
        .normalize("NFD")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .replace(/\s+/g, "-"));
      data.append('nameFilmReal', nameFilm);

      data.append('fileFilm', fileFilm.fileFilm);//Add file film

      //request POST data
      const res = await axios.post("/admin/add-film", data);

      // Notification box Sweet Alert 2
      console.log(res);
      Swal.fire({
        icon: res.data.status == 'success' && res.status == 200 ? 'success' : 'error',
        title:res.data.status == 'success' && res.status == 200 ?  res.data.status + '😎' :  res.data.status + '😥',
        text: res.data.status == 'success' && res.status == 200 ? 'Post Film Success' : 'Post Film NOT Success',
      });

    };
  };

  return (
    <div>
      <div className="container">
        <video width="300" autoplay controls src={fileFilm.srcLocal}></video>
      </div>


      <form action="add/film" onSubmit={submitForm}>

        <input type="text" placeholder="Enter name film" name="name_film"
          onChange={() => setNameFilm(event.target.value.trim())} />

        <input type="file" placeholder="Enter file" name="file_film" accept=".mp4" multiple
          onChange={() => setFileFilm(
            {
              srcLocal: (window.URL || window.webkitURL).createObjectURL(event.target.files[0]),
              fileFilm: event.target.files[0]
            })} />

        <button type="submit"> Post </button>
      </form>
    </div>
  )
}

export default AdminForm;
