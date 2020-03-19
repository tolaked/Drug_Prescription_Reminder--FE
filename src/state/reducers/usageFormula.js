import * as types from '../constants/usageFormula';

const initialState = {
  requesting: false,
  formula: {},
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
      case types.GET_USAGE_FORMULA_SUCCESS:
        return{
          ...state,
          requesting:false,
          formula:action.payload,
          error:null,
        }
        case types.GET_USAGE_FORMULA_ERROR:
        return{
          ...state,
          requesting:false,
          formula:{},
          error:action.payload,
        }
        case types.GET_USAGE_FORMULA_REQUEST:
        return{
          ...state,
          requesting:true,
          formula:{},
          error:null
        }
    default:
      return state;
  }
}
