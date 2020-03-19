import axios from 'axios';
import Cookie from 'js-cookie';
import * as types from '../constants/prescriptions'

export const getSinglePresriptionSuccess = payload =>({
    type:types.GET_SINGLE_PRESCRIPTION_REQUEST,
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

export const getSinglePresription =(payload)=>({
  type: types.GET_PRESCRIPTIONS_ERROR,
  payload
})

export const deletePrescriptionSuccess =(payload)=>({
  type: types.DELETE_PRESCRIPTION_SUCCESS,
  payload
})

export const addPrescription = (data) => dispatch => {
  const token = Cookie.get('token');
  axios({ method: 'POST', 
  url: 'https://drug-prescription-app.herokuapp.com/api/v1/prescription/add',
    'Authorization': token})
    .then(({ data }) => {
      dispatch(getSinglePresriptionSuccess(data));
    })
    .catch(error => {
    });
};

export const getPrescriptions = () => dispatch => {
  dispatch(getPrescriptionRequest(true));
  const token = Cookie.get('token');
  axios(
    { method: 'GET', 
    url: 'https://drug-prescription-app.herokuapp.com/api/v1/prescription',
    'Authorization': token})
    .then(({ data }) => {
      dispatch(getPrescriptionSuccess(data.prescription));
    })
    .catch(error => {
      console.log(error.response)
    });
};


export const fetchSinglePrescription = (id) => dispatch => {
  dispatch(getSinglePresriptionSuccess(true));
  const token = Cookie.get('token');
  axios(
    { method: 'GET', 
    url: `https://drug-prescription-app.herokuapp.com/api/v1/prescription/find/${id}`,
    'Authorization': token}).then(({ data }) => {
      dispatch(getSinglePresriptionSuccess(data));
     
    })
    .catch(error => {
      console.log(error.response)
    });
};

export const deletePrescription = (id) => dispatch => {
  const token = Cookie.get('token');
  axios(
    { 
      method: 'DELETE', 
    url: `https://drug-prescription-app.herokuapp.com/api/v1/prescription/${id}`,
    'Authorization': token
  }).then(({ data }) => {
      
      dispatch(deletePrescriptionSuccess(data.prescription));
    })
    .catch(error => {
      console.log(error.response)
    });
};