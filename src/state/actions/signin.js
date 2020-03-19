import axios from 'axios';
import Cookie from 'js-cookie';
import history from '../../history';
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
  
  export const doSignIn = (user) => dispatch => {
    dispatch(signInRequest(true));
    axios.post({ method: 'POST', url: 'https://dashboard.heroku.com/apps/drug-prescription-app/api/v1/prescription/add',user, headers:{'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'}})
      .then(({ data }) => {
        Cookie.set('token', data.user.token);
        
        dispatch(signInSuccess(data.user));
        history.push('/add');
      })
      .catch(error => {
        dispatch(signInError(error));
      });
    dispatch(signInRequest(false));
  };
  