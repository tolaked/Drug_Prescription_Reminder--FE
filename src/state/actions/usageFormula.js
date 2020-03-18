import axios from 'axios';
import Cookie from 'js-cookie';
import * as types from '../constants/usageFormula'

export const usageFormulaRequest = payload =>({
    type:types.GET_USAGE_FORMULA_REQUEST,
    payload
})

export const usageFormulaSuccess = payload =>({
    type: types.GET_USAGE_FORMULA_SUCCESS,
    payload
})

export const usageFormulaError = payload =>({
    type: types.GET_USAGE_FORMULA_ERROR,
    payload
})


export const addFormula = (data,id) => dispatch => {
  dispatch(usageFormulaRequest(true));
  const token = Cookie.get('token');
  axios({ method: 'POST', url: `http://localhost:5000/api/v1/formula/add/${id}`,data, headers:{'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
    'Authorization': token,}})
   
    .then(({ data }) => {
      dispatch(usageFormulaSuccess(data));
    })
    .catch(error => {
      dispatch(usageFormulaError(error));
    });
  dispatch(usageFormulaRequest(false));
};


