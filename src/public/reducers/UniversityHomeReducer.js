import {
  UNIVERSITY_HOME_LOADING,
  UNIVERSITY_HOME_SUCCESS,
  UNIVERSITY_HOME_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  universities: [],
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UNIVERSITY_HOME_LOADING:
      return { ...state, loading: true };
    case UNIVERSITY_HOME_SUCCESS:
      return { ...state, loading: false, universities: action.payload };
    case UNIVERSITY_HOME_FAIL:
      return { ...state, loading: false, error: 'Error!' };
    default:
      return state;
  }
};
