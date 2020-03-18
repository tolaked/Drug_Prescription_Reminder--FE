import { combineReducers } from "redux";
import user from "./users";
import prescription from './prescription'


const rootReducer = combineReducers({
  user,
  prescription
});

export default rootReducer;
