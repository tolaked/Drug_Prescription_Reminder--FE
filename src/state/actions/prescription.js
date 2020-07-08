import axios from "axios";
import { toast } from 'react-toastify';
import Cookie from "js-cookie";
import history from "../../history";
import * as types from "../actionTypes/prescriptions";

export const getSinglePresriptionSuccess = (payload) => ({
  type: types.GET_SINGLE_PRESCRIPTION_REQUEST,
  payload,
});

export const getPrescriptionRequest = (payload) => ({
  type: types.GET_PRESCRIPTIONS_REQUEST,
  payload,
});

export const getPrescriptionSuccess = (payload) => ({
  type: types.GET_PRESCRIPTIONS_SUCCESS,
  payload,
});

export const getSinglePresription = (payload) => ({
  type: types.GET_PRESCRIPTIONS_ERROR,
  payload,
});

export const deletePrescriptionSuccess = (payload) => ({
  type: types.DELETE_PRESCRIPTION_SUCCESS,
  payload,
});

export const addPrescriptionSuccess = (payload) => ({
  type: types.ADD_PRESCRIPTION_SUCCESS,
  payload,
});
export const addPrescriptionError = (payload) => ({
  type: types.ADD_PRESCRIPTION_ERROR,
  payload,
});

export const getPrescriptionsError = (payload) => ({
  type: types.GET_PRESCRIPTIONS_ERROR,
  payload,
});


export const addPrescription = (prescription) => (dispatch) => {
  const token = localStorage.getItem("token");

  axios
    .post(
      "https://drug-prescription-app.herokuapp.com/api/v1/prescription/add",
      prescription,
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then(({ data }) => {
      dispatch(addPrescriptionSuccess(data));
      history.push("/add");
    })
    .catch((error) => {
      dispatch(addPrescriptionError(true))
      console.log(error);
    });
};

export const getPrescriptions = () => (dispatch) => {
  dispatch(getPrescriptionRequest(true));

  const token = localStorage.getItem("token");

  axios
    .get("https://drug-prescription-app.herokuapp.com/api/v1/prescription", {
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) => {
      dispatch(getPrescriptionSuccess(data.prescription));
    })
    .catch((error) => {
      dispatch(getPrescriptionsError(true))
      return error.response
    });
};

export const fetchSinglePrescription = (id) => (dispatch) => {
  dispatch(getSinglePresriptionSuccess(true));

  const token = localStorage.getItem("token");

  axios
    .get(
      `https://drug-prescription-app.herokuapp.com/api/v1/prescription/find/${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then(({ data }) => {
      dispatch(getSinglePresriptionSuccess(data));
    })
    .catch((error) => error.response);
};

export const deletePrescription = (id) => (dispatch) => {
  const token = localStorage.getItem("token");

  axios
    .delete(
      `https://drug-prescription-app.herokuapp.com/api/v1/prescription/${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then(({ data }) => {
      dispatch(deletePrescriptionSuccess(data.prescription));
    })
    .catch((error) => error.response);
};
