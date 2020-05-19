import axios from "axios";
import { toast } from 'react-toastify';
import Cookie from "js-cookie";
import history from '../../history';
import * as types from "../actionTypes/usageFormula";

export const getUsageFormulaSuccess = payload => ({
  type: types.GET_USAGE_FORMULA_SUCCESS,
  payload
});

export const getUsageFormulaError = payload => ({
  type: types.GET_USAGE_FORMULA_ERROR,
  payload
});
export const getUsageFormulaRequest = payload => ({
  type: types.GET_USAGE_FORMULA_REQUEST,
  payload
});
export const addUsageFormulaSuccess = payload => ({
  type: types.ADD_USAGE_FORMULA_SUCCESS,
  payload
});

export const editUsageFormula = payload => ({
  type: types.EDIT_USAGE_FORMULA_SUCCESS,
  payload
});

export const addUsageFormulaError = payload => ({
  type: types.ADD_USAGE_FORMULA_ERROR,
  payload
});

export const addFormula = (formula, id) => dispatch => {
  const token = localStorage.getItem("token");

  axios
    .post(
      `https://drug-prescription-app.herokuapp.com/api/v1/formula/add/${id}`,
      formula,
      {
        headers: {
          Authorization: token
        }
      }
    )
    .then(({ data }) => {
      dispatch(addUsageFormulaSuccess(data));
      history.push("/add");
    })
    .catch(error => {
      dispatch(addUsageFormulaError(error));
    });
};

export const getFormula = id => dispatch => {
  dispatch(getUsageFormulaRequest(true));

  const token = localStorage.getItem("token");

  axios
    .get(`https://drug-prescription-app.herokuapp.com/api/v1/formula/${id}`, {
      headers: {
        Authorization: token
      }
    })
    .then(({ data }) => {
      dispatch(getUsageFormulaSuccess(data));
    })
    .catch(error => {
      dispatch(getUsageFormulaError(error));

      console.log(error.response);
    });
  dispatch(getUsageFormulaRequest(false));
};

export const editFormula = (id,formula) => dispatch => {
  dispatch(getUsageFormulaRequest(true));

  const token = localStorage.getItem("token");

  axios
    .put(`https://drug-prescription-app.herokuapp.com/api/v1/formula/${id}`,formula, {
      headers: {
        Authorization: token
      }
    })
    .then(({ data }) => {
      // toast.success("Formula added successfully !",{
      //   position: "top-center",
      //   autoClose: 1000,
      //   hideProgressBar: false,
      //   closeOnClick: false,
      //   pauseOnHover: true,
      //   draggable: true,
      // });
      dispatch(editUsageFormula(data));
      
    })
    .catch(error => {
      console.log(error.response);
    });
  dispatch(getUsageFormulaRequest(false));
};
