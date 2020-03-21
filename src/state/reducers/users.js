import * as types from "../actionTypes/users";

const initialState = {
  requesting: false,
  user: {},
  loggedOut: true,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SIGNIN_REQUEST:
      return {
        ...state,
        requesting: action.payload,
        loggedOut: false
      };
    case types.SIGNIN_SUCCESS:
      return {
        ...state,
        requesting: false,
        user: action.payload,
        loggedOut: false,
        error: null
      };
    case types.SIGNIN_ERROR:
      return {
        ...state,
        requesting: false,
        user: {},
        loggedOut: false,
        error: action.payload
      };
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        requesting: action.payload,
        loggedOut: false
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        requesting: false,
        user: action.payload,
        loggedOut: false,
        error: null
      };
    case types.SIGNUP_ERROR:
      return {
        ...state,
        requesting: false,
        user: {},
        loggedOut: false,
        error: action.payload
      };
    case types.LOGOUT_REQUEST:
      return {
        ...state,
        requesting: action.payload,
        loggedOut: true
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        requesting: false,
        user: {},
        loggedOut: action.payload,
        error: null
      };
    case types.LOGOUT_ERROR:
      return {
        ...state,
        requesting: false,
        loggedOut: true,
        error: action.payload
      };
    default:
      return state;
  }
}
