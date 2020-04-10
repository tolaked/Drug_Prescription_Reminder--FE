import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFormula } from "../../state/actions/usageFormula";
import { InputDiv } from "../auth/Login";
import Input from "../../reusables/Input";
import Label from "../../reusables/Label";
import { StyledForm } from "../prescriptions/Modal";

const EditFormula = ({ handleHide, children, edit, form }) => {
  const initialForm = {
    frequency: "",
    dose: "",
    number_of_times: "",
    duration: "",
    before_after_meal: "",
  };
  const [forms, setForm] = useState(initialForm);
  
  useEffect(() => {
    setForm(form);
  }, [form]);

  const showHideClassName = edit ? "modal display-usage" : "modal hide-display";

  const prescription_id =
    useSelector(state => state.prescription.prescription._id) || "";

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e, id) => {
    e.preventDefault();
    dispatch(addFormula(form, id));
  };

  return (
    <div className={showHideClassName}>
      <section className="formula-modal">
        {children}

        <StyledForm onSubmit={(e) => handleSubmit(e, prescription_id)}>
          <div className="close" onClick={handleHide}>
            x
          </div>
          <h4 style={{ marginBottom: "25px", marginTop: "5px" }}>
            Edit usage formula
          </h4>
          <InputDiv>
            <Label medium htmlFor="frequency">
              Frequency
            </Label>
            <Input
              small
              type="text"
              name="frequency"
              id="frequency"
              value={forms.frequency}
              onChange={handleChange}
            />
          </InputDiv>
          <InputDiv>
            <Label medium htmlFor="dose">
              Dose
            </Label>
            <Input
              small
              id="dose"
              type="number"
              name="dose"
              value={forms.dose}
              onChange={handleChange}
            />
          </InputDiv>
          <InputDiv>
            <Label medium htmlFor="number_of_times">
              Number of times(daily)
            </Label>
            <Input
              small
              type="number"
              id="number_of_times"
              name="number_of_times"
              value={forms.number_of_times}
              onChange={handleChange}
            />
          </InputDiv>
          <InputDiv>
            <Label medium htmlFor="duration">
              Duration
            </Label>
            <Input
              small
              type="text"
              id="duration"
              name="duration"
              value={forms.duration}
              onChange={handleChange}
            />
          </InputDiv>
          <InputDiv>
            <Label medium htmlFor="meal">
              Before or after meal
            </Label>
            <Input
              small
              type="text"
              id="meal"
              name="before_after_meal"
              value={forms.before_after_meal}
              onChange={handleChange}
            />
          </InputDiv>
          <button type="primary" className="btn add-formula-btn">
            Submit
          </button>
        </StyledForm>
      </section>
    </div>
  );
};

export default EditFormula;
