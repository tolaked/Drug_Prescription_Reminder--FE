import axios from "axios";
import Cookie from "js-cookie";
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
      Cookie.set("token", data.user.token);

      dispatch(signUpSuccess(data.user));
      return data;
    })
    .catch(error => {
      dispatch(signUpError(error.response));
      return error.response;
    });
  dispatch(signUpRequest(false));
};
