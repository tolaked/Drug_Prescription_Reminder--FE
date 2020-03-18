import { combineReducers } from "redux";
import user from "./users";
import prescription from './prescription'
import usageFormula from './usageFormula'


const rootReducer = combineReducers({
  user,
  prescription,
  usageFormula
});

export default rootReducer;
