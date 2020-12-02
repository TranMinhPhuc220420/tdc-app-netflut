/*
* Author: Tran Minh Phuc
* Email: tranminhphuc220420@gmail.com
* Github: tranminhphuc220420
* */

import TypeFilmModel from '../model/TypeFilmModel'

const CategoryTypeController = {

    /*
    * Add new type film
    * data:
    *     - data: is name type add
    * */
    addNewTypeFilm: (data, callback) => {
      //clear space
      data.trim();

      //check and execute post new type film
      if (data === '') {
        callback('fail');
      } else {
        TypeFilmModel.add({'name': data}, callback); // post new type film
      }
    },

    deleteTypeFilm: (idTypeFilm, callback) => {
      //check and execute post new type film
      if (idTypeFilm === '') {
        callback('fail');
      } else {
        TypeFilmModel.delete({'id': idTypeFilm}, callback); // post new type film
      }
    },

    editTypeFilm: (id, nameEdit, callback) => {
      nameEdit.trim();
      if (nameEdit === '') {
        callback('fail');
      } else {
        //set data
        let data = {
          id: id,
          nameChange: nameEdit
        };

        TypeFilmModel.edit(data, callback); // edit type film
      }
    }
  }
;

export default CategoryTypeController;
