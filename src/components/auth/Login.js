import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Button as AntButton } from "antd";
import validate from "validate.js";

import Homepage from "../hompage/Homepage";
import { doSignIn } from "../../state/actions/signin";
import Input from "../../reusables/Input";
import Label from "../../reusables/Label";
import "../../assets/styles/styles.css";

const schema = {
  email: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 4,
      maximum: 64,
    },
  },
  password: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 6,
      maximum: 128,
    },
  },
};

const Login = () => {
  const dispatch = useDispatch();
  const loggingIn = useSelector((state) => state.user.requesting) || false;

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });
  const [antButtonState, setAntButtonState] = useState({
    loading: false,
    iconLoading: false,
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((formState) => ({
      ...formState,
      isValid: !errors,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (event) => {
    event.persist();

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          // event.target.type === "checkbox"
          //   ? event.target.checked
          event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const hasError = (field) =>
    !!(formState.touched[field] && formState.errors[field]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setAntButtonState({
      iconLoading: antButtonState.iconLoading,
      loading: true,
    });

      dispatch(doSignIn(formState.values))
    
  };
  return (
    <div>
      <Homepage alt />
      <BorderDiv>
        <StyledForm>
          <h2>Login to your account</h2>
          <InputDiv>
            <Label medium>Email</Label>
            <Input
              required
              small
              type="text"
              onChange={handleChange}
              name="email"
              value={formState.values.email || ""}
            />
            {hasError("email") ? (
              <p className="error">{formState.errors.email[0]}</p>
            ) : null}
          </InputDiv>
          <InputDiv>
            <Label medium>Password</Label>
            <Input
              required
              small
              type="password"
              onChange={handleChange}
              name="password"
              value={formState.values.password || ""}
            />

            {hasError("password") ? (
              <p className="error">
                {formState.errors.password[0]}
              </p>
            ) : null}
          </InputDiv>
          <AntButton
            type="primary"
            disabled={!formState.isValid}
            className = {!formState.isValid ? 'disabled' : null}
            onClick={async (event) => {
              handleSubmit(event, formState.values);
            }}
            style={{
              backgroundColor: "#4FB4C2",
              width: "18.5rem",
              height: "3rem",
              fontSize: "16px",
              color: "white",
              borderRadius: "0.5rem",
            }}
          >
            {loggingIn ? "Logging in..." : "Log in"}
          </AntButton>
          <p>
            Don't have an account? signup
            <NavLink className="register" to="/register">
              {" "}
              here
            </NavLink>{" "}
          </p>
        </StyledForm>
      </BorderDiv>
    </div>
  );
};

export default Login;

const BorderDiv = styled.div``;
export const StyledForm = styled.form`
  width: 400px;
  height: 380px;
  background: #ffffff;
  border: 1px solid #ddf8fc;
  box-sizing: border-box;
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
  border-radius: 5px;
  box-align: center;
  position: absolute;
  top: 50vh;
  left: 77%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputDiv = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
