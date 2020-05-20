import axios from "axios";
import history from '../../history'
import * as types from "../actionTypes/users";

export const signUpRequest = payload => ({
  type: types.SIGNUP_REQUEST,
  payload
});

export const signUpSuccess = payload => ({
  type: types.SIGNUP_SUCCESS,
  payload
});

export const signUpError = payload => ({
  type: types.SIGNUP_ERROR,
  payload
});

export const doSignUp = user => dispatch => {
  dispatch(signUpRequest(true));
  return axios
    .post(
      "https://drug-prescription-app.herokuapp.com/api/v1/users/register",
      user
    )
    .then(({ data }) => {
      localStorage.setItem("token", data.user.token);
      dispatch(signUpSuccess(data.user));
      history.push("/add");
      return data;
    })
    .catch(error => {
      dispatch(signUpError('email already exist'));
      return error.response;
    });
  
};
