import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button as AntButton } from "antd";
import validate from "validate.js";

import { doSignUp } from "../../state/actions/signup";
import Homepage from "../hompage/Homepage";
import Input from "../../reusables/Input";
import Label from "../../reusables/Label";
import "../../assets/styles/styles.css";

const schema = {
  firstName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 2,
      maximum: 50
    }
  },
  lastName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 2,
      maximum: 50
    }
  },
  email: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 6,
      maximum: 128
    }
  },
  age: {
    presence: { allowEmpty: false, message: "is required" }
  },
  password: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 6,
      maximum: 128
    }
  }
};

const Register = () => {
  const dispatch = useDispatch()
  const signupError =     useSelector(state => state.user.signupError) || '';
  const creating = useSelector((state) => state.user.requesting) || false;

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });
  const [antButtonState, setAntButtonState] = useState({
    loading: false,
    iconLoading: false
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: !errors,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          // event.target.type === "checkbox"
          //   ? event.target.checked
             event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const hasError = field =>
    !!(formState.touched[field] && formState.errors[field]);

  const handleSubmit = event => {
    event.preventDefault();

    setAntButtonState({
      iconLoading: antButtonState.iconLoading,
      loading: true
    });

    dispatch(doSignUp({
      ...formState.values,
      age: parseInt(formState.values.age, 10)
    }))
  };
  return (
    <div>
      <Homepage alt />
      <BorderDiv>
        
        <StyledForm>
          <h2 className="signup-header">Create an account</h2>
          {
          (signupError.length > 0) && <p className='login-error'>{signupError}</p>
        }
          <InputDiv>
            <Label medium>First Name</Label>
            <Input
              small
              type="text"
              onChange={handleChange}
              name="firstName"
              value={formState.values.firstName || ""}
            />
            {hasError("firstName") ? (
              <p className="error">
                first Name must be at least 3 characters
              </p>
            ) : null}
          </InputDiv>
          <InputDiv>
            <Label medium>Last Name</Label>
            <Input
              small
              type="text"
              onChange={handleChange}
              name="lastName"
              value={formState.values.lastName || ""}
            />
            {hasError("lastName") ? (
              <p className="error" >
                Last Name must be at least 3 characters
              </p>
            ) : null}
          </InputDiv>
          <InputDiv>
            <Label medium>Email</Label>
            <Input
              small
              type="email"
              onChange={handleChange}
              name="email"
              value={formState.values.email || ""}
            />
            {hasError("email") ? (
              <p className="error">
                {formState.errors.email[0]}
              </p>
            ) : null}
          </InputDiv>
          <InputDiv>
            <Label medium>Age</Label>
            <Input
              small
              type="number"
              onChange={handleChange}
              name="age"
              value={formState.values.age || ""}
            />
            {hasError("age") ? (
              <p className="error">
                {formState.errors.age[0]}
              </p>
            ) : null}
          </InputDiv>
          <InputDiv>
            <Label medium>Password</Label>
            <Input
              small
              type="password"
              onChange={handleChange}
              name="password"
              value={formState.values.password || ""}
            />
            {hasError("password") ? (
              <p className="error" >
                password must be of 6 characters
              </p>
            ) : null}
          </InputDiv>
          <AntButton
            type="primary"
            disabled={!formState.isValid}
            // className = {!formState.isValid ? 'disabled' : null}
            onClick={handleSubmit}
            style={{
              backgroundColor: "#4FB4C2",
              width: "18.5rem",
              height: "3rem",
              fontSize: "16px",
              color: "white",
              borderRadius: "0.5rem"
            }}
          >
            {creating ? "Creating..." : "Sign Up"}
          </AntButton>
          <p>
            Already have an account? Login{" "}
            <NavLink className="login-link" to="/">
              here
            </NavLink>
          </p>
        </StyledForm>
      </BorderDiv>
    </div>
  );
};


export default Register;

const BorderDiv = styled.div``;
const StyledForm = styled.form`
  width: 460px;
  height: 520px;
  background: #ffffff;
  border: 1px solid #ddf8fc;
  box-sizing: border-box;
  padding-bottom: 0.3rem;
  border-radius: 5px;
  box-align: center;
  position: absolute;
  top: 56vh;
  left: 77%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 600px) {
      left:68%;
  }
`;

export const InputDiv = styled.div`
  margin-bottom: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

`;
