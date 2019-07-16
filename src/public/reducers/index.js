import { combineReducers } from 'redux';
import UniversityHomeReducer from './UniversityHomeReducer';

export default combineReducers({
  home: UniversityHomeReducer
});
