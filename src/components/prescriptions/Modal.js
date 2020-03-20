import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Styled from "styled-components";
import { addPrescription,getPrescriptions } from "../../state/actions/prescription";
import Input from "../../reusables/Input";
import Label from "../../reusables/Label";
import { InputDiv } from "../auth/Login";
import "../prescriptionCard/styles.css";

function Modal({ handleHide, show, children }) {
  const initialState = {
    drug: "",
    unit: "",
    start_Date: "",
    end_Date: ""
  };
  const [form, setForm] = useState(initialState);
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const prescriptions =
  useSelector(state => state.prescription.prescriptions) || [];
const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    e.preventDefault();
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPrescription(form));
    dispatch(getPrescriptions())
  };
  return (
    <div className={showHideClassName}>
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
    </div>
  );
}

export default Modal;

export const StyledForm = Styled.form`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  `;
