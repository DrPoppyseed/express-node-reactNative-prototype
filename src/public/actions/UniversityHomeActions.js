import {
  UNIVERSITY_HOME_LOADING,
  UNIVERSITY_HOME_SUCCESS,
  UNIVERSITY_HOME_FAIL,
  UNIVERSITY_HOME_ITEM_CLICKED
} from './types';

const fetch = require('node-fetch');

export const renderUniversities = () => (dispatch) => {
  dispatch({ type: UNIVERSITY_HOME_LOADING });
  fetch('/university_home/')
    .then((res) => {
      res.json()
        .then((data) => {
          dispatch({
            type: UNIVERSITY_HOME_SUCCESS,
            payload: data
          })
        .catch((err) => {
          dispatch({ type: UNIVERSITY_HOME_FAIL })
        })
    })
    .catch((err) => {
      dispatch({ type: UNIVERSITY_HOME_FAIL });
    });
  });
};

// if (res.status !== 200) {
//   console.log(`Error, status code: ${res.status}`);
//   return;
// }
