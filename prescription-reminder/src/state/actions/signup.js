import axios from 'axios';
import Cookie from 'js-cookie';
import * as types from '../constants/users'

export const signUpRequest = payload =>({
    type:types.SIGNUP_REQUEST,
    payload
})

export const signUpSuccess = payload =>({
    type: types.SIGNUP_SUCCESS,
    payload
})

export const signUpError = payload =>({
    type: types.SIGNUP_ERROR,
    payload
})


export const doSignUp = user => dispatch => {
  dispatch(signUpRequest(true));
  axios
    .post('http://localhost:5000/api/v1/users/register', user)
    .then(({ data }) => {
      Cookie.set('token', data.user.token);
    //   Router.push('/userdashboard');
      dispatch(signUpSuccess(data.user));
    })
    .catch(error => {
      dispatch(signUpError(error.response.data));
    });
  dispatch(signUpRequest(false));
};
