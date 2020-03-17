import axios from 'axios';
import Cookie from 'js-cookie';
import * as types from '../constants/users'


const signInRequest = payload => ({
    type: types.SIGNIN_REQUEST,
    payload,
  });
  
  const signInSuccess = payload => ({
    type: types.SIGNIN_SUCCESS,
    payload,
  });
  
  const signInError = payload => ({
    type: types.SIGNIN_ERROR,
    payload,
  });
  
  export const doSignIn = user => dispatch => {
    dispatch(signInRequest(true));
    axios.post('http://localhost:5000/api/v1/users/login', user)
      .then(({ data }) => {
        Cookie.set('token', data.user.token);
        // Router.push('/userdashboard');
        dispatch(signInSuccess(data.user));
        console.log(data)
      })
      .catch(error => {
        dispatch(signInError(error.response.data));
      });
    dispatch(signInRequest(false));
  };
  