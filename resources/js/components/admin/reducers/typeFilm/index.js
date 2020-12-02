const dataTypeFilm = (state, action) => {
  if (action.type === 'SET_TYPE_FILM') {
    state = action.data;
  } else {
    state = [];
  }

  return state;
};

export default dataTypeFilm;
