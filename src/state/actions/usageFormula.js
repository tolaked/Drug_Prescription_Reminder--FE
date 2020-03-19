import axios from 'axios';
import Cookie from 'js-cookie';
import * as types from '../constants/usageFormula'

export const getUsageFormulaSuccess = payload =>({
    type:types.GET_USAGE_FORMULA_SUCCESS,
    payload
})

export const getUsageFormulaError = payload =>({
    type:types.GET_USAGE_FORMULA_ERROR,
    payload
})
export const getUsageFormulaRequest = payload =>({
    type:types.GET_USAGE_FORMULA_REQUEST,
    payload
})
export const addUsageFormulaSuccess = payload =>({
    type: types.ADD_USAGE_FORMULA_SUCCESS,
    payload
})

export const addUsageFormulaError = payload =>({
    type: types.ADD_USAGE_FORMULA_ERROR,
    payload
})


export const addFormula = (data,id) => dispatch => {
  const token = Cookie.get('token');
  axios({ method: 'POST', url: `https://dashboard.heroku.com/apps/drug-prescription-app/api/v1/formula/add/${id}`,data, headers:{'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
    'Authorization': token,}})
   
    .then(({ data }) => {
      dispatch(addUsageFormulaSuccess(data));
    })
    .catch(error => {
      dispatch(addUsageFormulaError(error));
    });
};

export const getFormula = (id) => dispatch => {
    dispatch(getUsageFormulaRequest(true))
    const token = Cookie.get('token');
    axios({ method: 'GET', url: `https://dashboard.heroku.com/apps/drug-prescription-app/api/v1/formula/${id}`, headers:{'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
      'Authorization': token,}})

      .then(({ data }) => {
        dispatch(getUsageFormulaSuccess(data));
      })
      .catch(error => {
        dispatch(getUsageFormulaError(error));

        console.log(error.response)
      });
      dispatch(getUsageFormulaRequest(false))
  };
  
