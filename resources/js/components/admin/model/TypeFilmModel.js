import axios from "axios";

const TypeFilmModel = {
  add: async (data, callback) => {
    try {
      axios.post("/admin/add-type-film", data)
        .then(response => {
          callback(response.data.status)
        });
    } catch (err) {
      console.log(err.message)
    }
  },

  delete: async (data, callback) => {
    try {
      axios.post("/admin/delete-type-film/", data)
        .then(response => {
          callback(response.data.status)
        });
    } catch (err) {
      console.log(err.message)
    }
  },

  getAll: async (callback) => {
    try {
      axios.get("/api/type-film/get/all")
        .then(response => {
          callback(response.data.result)
        });
    } catch (err) {
      console.log(err.message)
    }
  },

  edit: async (data, callback) => {
    try {
      axios.post("/admin/edit-type-film", data)
        .then(response => {
          callback(response.data.result)
        });
    } catch (err) {
      console.log(err.message)
    }
  }
};

export default TypeFilmModel;
