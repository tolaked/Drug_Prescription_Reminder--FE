import axios from 'axios';
import Cookie from 'js-cookie';
import * as types from '../constants/prescriptions'

export const addPrescriptionRequest = payload =>({
    type:types.ADD_PRESCRIPTION_REQUEST,
    payload
})

export const addPrescriptionSuccess = payload =>({
    type: types.ADD_PRESCRIPTION_SUCCESS,
    payload
})

export const addPrescriptionError = payload =>({
    type: types.ADD_PRESCRIPTION_ERROR,
    payload
})

export const getPrescriptionRequest = payload =>({
  type:types.GET_PRESCRIPTIONS_REQUEST,
  payload
})

export const getPrescriptionSuccess = payload =>({
  type: types.GET_PRESCRIPTIONS_SUCCESS,
  payload
})

export const getPrescriptionError = payload =>({
  type: types.GET_PRESCRIPTIONS_ERROR,
  payload
})


export const addPrescription = (data) => dispatch => {
  dispatch(addPrescriptionRequest(true));
  const token = Cookie.get('token');
  axios({ method: 'POST', url: 'http://localhost:5000/api/v1/prescription/add',data, headers:{'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
    'Authorization': token,}})
   
    .then(({ data }) => {
      console.log(data.prescription)
      dispatch(addPrescriptionSuccess(data));
    })
    .catch(error => {
      dispatch(addPrescriptionError(error));
      console.log(error.response.data)
    });
  dispatch(addPrescriptionRequest(false));
};


export const getPrescriptions = () => dispatch => {
  dispatch(getPrescriptionRequest(true));
  const token = Cookie.get('token');
  axios(
    { method: 'GET', url: 'http://localhost:5000/api/v1/prescription', headers:{'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
    'Authorization': token,}})
   
    .then(({ data }) => {
      
      dispatch(getPrescriptionSuccess(data));
    })
    .catch(error => {
      dispatch(addPrescriptionError(error));
      console.log(error.response.data)
    });
  dispatch(getPrescriptionError(false));
};