import * as types from '../constants/prescription';

const initialState = {
  requesting: false,
  prescription: {},
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_PRESCRIPTION_REQUEST:
      return {
        ...state,
        requesting: action.payload,
      };
    case types.ADD_PRESCRIPTION_SUCCESS:
      return {
        ...state,
        requesting: false,
        prescription: action.payload,
        error: null,
      };
    case types.ADD_PRESCRIPTION_ERROR:
      return {
        ...state,
        requesting: false,
        prescription: {},
        error: action.payload,
      };
    default:
      return state;
  }
}
