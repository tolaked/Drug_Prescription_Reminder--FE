import * as types from '../constants/user';

const initialState = {
  requesting: false,
  user: {},
  logged: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SIGNIN_REQUEST:
      return {
        ...state,
        requesting: action.payload,
        logged: false,
      };
    case types.SIGNIN_SUCCESS:
      return {
        ...state,
        requesting: false,
        user: action.payload,
        logged: true,
        error: null,
      };
    case types.SIGNIN_ERROR:
      return {
        ...state,
        requesting: false,
        user: {},
        logged: false,
        error: action.payload,
      };
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        requesting: action.payload,
        logged: false,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        requesting: false,
        user: action.payload,
        logged: true,
        error: null,
      };
    case types.SIGNUP_ERROR:
      return {
        ...state,
        requesting: false,
        user: {},
        logged: false,
        error: action.payload,
      };
    case types.LOGOUT_REQUEST:
      return {
        ...state,
        requesting: action.payload,
        logged: true,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        requesting: false,
        user: {},
        logged: action.payload,
        error: null,
      };
    case types.LOGOUT_ERROR:
      return {
        ...state,
        requesting: false,
        logged: true,
        error: action.payload,
      };
    default:
      return state;
  }
}
