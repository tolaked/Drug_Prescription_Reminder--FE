import * as types from '../constants/prescriptions';

const initialState = {
  requesting: false,
  prescription: {},
  prescriptions:[],
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_SINGLE_PRESCRIPTION_REQUEST:
      return {
        ...state,
        prescription: action.payload,
        requesting: false,
        prescriptions: state.prescriptions,
        error: null,
      };
    
    case types.GET_PRESCRIPTIONS_REQUEST:
      return{
        ...state,
        requesting:action.payload,
        prescriptions:[],
        prescription:{},
        error:null,
      }
      case types.GET_PRESCRIPTIONS_SUCCESS:
        return{
          ...state,
          requesting:false,
          prescriptions:action.payload,
          prescription:{},
          error:null,
        }
        case types.GET_PRESCRIPTIONS_ERROR:
        return{
          ...state,
          requesting:false,
          prescriptions:[],
          prescription:{},
          error:action.payload,
        }
    default:
      return state;
  }
}