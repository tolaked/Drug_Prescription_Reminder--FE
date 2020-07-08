import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Styled from "styled-components";
import {
  Dialog,

} from "@material-ui/core";

import CustomizedSnackbars from "../prescriptionCard/Snackbar";
import {
  addPrescription,
  getPrescriptions,
} from "../../state/actions/prescription";
import Input from "../../reusables/Input";
import Label from "../../reusables/Label";
import { InputDiv } from "../auth/Login";
import "../prescriptionCard/styles.css";

function Modal({ handleHide, show, children }) {
  const initialState = {
    drug: "",
    unit: "",
    start_Date: "",
    end_Date: "",
  };
  const [form, setForm] = useState(initialState);
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const dispatch = useDispatch();
  const addPrescriptionSuccess = useSelector(
    (state) => state.prescription.addPrescriptionSuccess
  );

  const addPrescriptionError = useSelector(
    (state) => state.prescription.addPrescriptionError
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPrescription(form));
    dispatch(getPrescriptions());
    setTimeout(()=>{
      handleHide(e);
      setForm(initialState);
    },3000)
    
    
  };
  return (
    <Dialog open={show} className={showHideClassName} onClose={handleHide}>
      {addPrescriptionSuccess === true ? 
        <CustomizedSnackbars
          success
          messageContent="Prescription added successfully"
        /> : null
      }

      {addPrescriptionError === true ? 
        <CustomizedSnackbars
          error
          messageContent="An error occured"
        /> : null}
      <section className="modal-main">
        {children}
        <div className="close" onClick={handleHide}>
          x
        </div>
        <StyledForm onSubmit={handleSubmit}>
          <h4>Add a new prescription</h4>
          <InputDiv>
            <Label medium htmlFor="drug">
              Drug
            </Label>
            <Input
              small
              type="text"
              name="drug"
              placeholder="drug name"
              id="drug"
              value={form.drug}
              onChange={handleChange}
            />
          </InputDiv>
          <InputDiv>
            <Label medium htmlFor="unit">
              Unit
            </Label>
            <Input
              small
              id="unit"
              placeholder="e.g pills"
              type="text"
              name="unit"
              value={form.unit}
              onChange={handleChange}
            />
          </InputDiv>
          <InputDiv>
            <Label medium htmlFor="start">
              Start Date:
            </Label>
            <Input
              small
              type="date"
              id="start"
              placeholder="enter start date"
              name="start_Date"
              value={form.start_Date}
              onChange={handleChange}
            />
          </InputDiv>
          <InputDiv>
            <Label medium htmlFor="end">
              End Date
            </Label>
            <Input
              small
              type="date"
              id="end"
              placeholder="enter end date"
              name="end_Date"
              value={form.end_Date}
              onChange={handleChange}
            />
          </InputDiv>
          <button
            type="primary"
            className="btn"
            style={{ width: "297px", height: "33px" }}
          >
            Add prescription
          </button>
        </StyledForm>
      </section>
    </Dialog>
  );
}

export default Modal;

export const StyledForm = Styled.form`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  `;
