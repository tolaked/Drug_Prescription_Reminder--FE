import * as types from "../actionTypes/users";

const initialState = {
  requesting: false,
  user: {},
  loginError: null,
  signupError: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SIGNIN_REQUEST:
      return {
        ...state,
        signupError:'',
        loginError : '',
        requesting: action.payload,
      };
    case types.SIGNIN_SUCCESS:
      return {
        ...state,
        requesting: false,
        user: action.payload,
        signupError:'',
        loginError : '',
      };
    case types.SIGNIN_ERROR:
      return {
        ...state,
        requesting: false,
        user: {},
        signupError : '',
        loginError : action.payload,
      };
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        signupError : '',
        loginError : '',
        requesting: action.payload
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        requesting: false,
        user: action.payload,
        signupError : '',
        loginError : '',
      };
    case types.SIGNUP_ERROR:
      return {
        ...state,
        requesting: false,
        user: {},
        signupError : action.payload,
        loginError : '',
      };
  
    default:
      return state;
  }
}
