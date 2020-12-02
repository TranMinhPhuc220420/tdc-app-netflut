import React from 'react';
import Swal from 'sweetalert2'

import CategoryTypeController from '../../../controller/TypeFilmController'


const GridViewTypeFilm = (props) => {
  // props.refreshStore();

  const columns = props.columns;
  const data = props.data;

  const formatDate = (date) => {
    let day, month, year;

    day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
    year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  return (
    <div className="card">

      {/* Title grid */}
      <div className="card-header border-transparent d-flex justify-content-between">
        <h3 className="card-title">{props.title}</h3>

        <button className="btn btn-outline-primary" onClick={props.refreshStore}>
          <i className="fas fa-redo"></i>
        </button>
      </div>

      {/* Grid body */}
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table m-0">
            <thead>
            {/* Header columns */}
            <tr>
              {columns.map((item, index) => (
                <th key={index}> {item.text} </th>
              ))}

              <th></th>
              <th></th>
            </tr>
            </thead>

            {/* Row items */}
            <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  <a href="#" onClick={(event) => event.preventDefault }>{item._id}</a>
                </td>
                <td>
                  {item.name}
                </td>
                <td>
                  {formatDate(new Date(item.created_at))}
                </td>
                <td>
                  {formatDate(new Date(item.updated_at))}
                </td>
                <td>
                  <a href="#" className="btn btn-success"
                     onClick={(event) => {
                       event.preventDefault();

                       Swal.fire({
                         title: 'Submit your Github username',
                         input: 'text',
                         inputAttributes: {
                           autocapitalize: 'off'
                         },
                         showCancelButton: true,
                         confirmButtonText: 'Look up',
                         showLoaderOnConfirm: true,
                         preConfirm: (data) => {
                           CategoryTypeController.editTypeFilm(item._id, data, (result) => {
                             Swal.fire({
                               position: 'top-end',
                               icon: 'success',
                               title: 'Your work has been saved',
                               showConfirmButton: false,
                               timer: 1500
                             });

                             //refresh store oof gridview
                             props.refreshStore();
                           })
                         },
                         allowOutsideClick: () => !Swal.isLoading()
                       })
                     }}>
                    <i className="far fa-edit"></i>
                  </a>
                </td>
                <td>
                  <a href="#" className="btn btn-danger"
                     onClick={(event) => {
                       event.preventDefault();

                       Swal.fire({
                         title: 'Are you sure?',
                         text: "You won't be able to revert this!",
                         icon: 'warning',
                         showCancelButton: true,
                         confirmButtonColor: '#3085d6',
                         cancelButtonColor: '#d33',
                         confirmButtonText: 'Yes, delete it!'
                       }).then((result) => {
                         if (result.isConfirmed) {
                           CategoryTypeController.deleteTypeFilm(item._id, () => {
                             props.refreshStore();
                             Swal.fire(
                               'Deleted!',
                               'Your file has been deleted.',
                               'success'
                             )
                           });
                         }
                       })
                     }}>

                    <i className="fas fa-times"></i>
                  </a>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};

export default GridViewTypeFilm;
