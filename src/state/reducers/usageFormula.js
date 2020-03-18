import * as types from '../constants/usageFormula';

const initialState = {
  requesting: false,
  usageFormula: {},
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USAGE_FORMULA_REQUEST:
      return{
        ...state,
        requesting:action.payload,
        usageFormula:{},
        error:null,
      }
      case types.GET_USAGE_FORMULA_SUCCESS:
        return{
          ...state,
          requesting:false,
          usageFormula:action.payload,
          error:null,
        }
        case types.GET_USAGE_FORMULA_ERROR:
        return{
          ...state,
          requesting:false,
          usageFormula:{},
          error:action.payload,
        }
    default:
      return state;
  }
}
