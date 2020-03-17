import React,{useState,useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Button as AntButton } from 'antd';
import validate from 'validate.js';

import {doSignIn} from '../../state/actions/signin'
import Input from '../../reusables/Input';
import Label from '../../reusables/Label';
import '../../assets/styles/styles.css'

const schema = {
    email: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        minimum: 4,
        maximum: 64,
      },
    },
    password: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        minimum: 6,
        maximum: 128,
      },
    },
  };

 

const Login =({doSignIn,error})=> {
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
    
        setFormState(formState => ({
          ...formState,
          isValid: !errors,
          errors: errors || {},
        }));
      }, [formState.values]);
    
      const handleChange = event => {
        event.persist();
    
        setFormState(formState => ({
          ...formState,
          values: {
            ...formState.values,
            [event.target.name]:
              event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value,
          },
          touched: {
            ...formState.touched,
            [event.target.name]: true,
          },
        }));
      };
    
      const hasError = field => !!(formState.touched[field] && formState.errors[field]);
    
      const handleSubmit = async (event, user) => {
        event.preventDefault();
        setAntButtonState({
          iconLoading: antButtonState.iconLoading,
          loading: true,
        });
        doSignIn(user);
      };
    return (
        <div >

                   <BorderDiv>
                   <StyledForm>
                       <InputDiv>
                       <Label
              medium
            >
              Email
            </Label>
                   <Input
              small
              type="text"
              onChange={handleChange}
              name="email"
              value={formState.values.email || ''}
            />
            {
              hasError('email') ? <p color="hsla(359,98%,68%,1)">{formState.errors.email[0]}</p> : null
            }
          </InputDiv>
          <InputDiv>
            <Label
              medium
            >
              Password
            </Label>
            <Input
              small
              type="password"
              onChange={handleChange}
              name="password"
              value={formState.values.password || ''}
            />
            
            {
              hasError('password') ? <p color="hsla(359,98%,68%,1)">{formState.errors.password[0]}</p> : null
            }
            </InputDiv>
            <AntButton
            type="primary"
            disabled={!formState.isValid}
            // loading={!!(error)}
            onClick={async (event) => {
              handleSubmit(event, formState.values);
            }}
            style={{
              backgroundColor: `${!formState.isValid ? '#4FB4C2' : "#4FB4C2"}`,
              width: '17.5rem',
              height: '3rem',
              fontSize:"16px",
              color:'white',
              borderRadius: '0.5rem',

            }}
          >
              
            Login
          </AntButton>
          <p>Don't have an account? signup<NavLink className='register' to="/register"> here</NavLink> </p>
                   </StyledForm>
                   
                   
               </BorderDiv>
           {/* </div> */}
           
        </div>
    )
}


const mapStateToProps = state => ({
  userData: state.user.user,
  error: state.user.error,
});

export default connect(mapStateToProps,{doSignIn})(Login)


const BorderDiv= styled.div`
  `
  const StyledForm = styled.form`
  width: 400px;
  height: 350px;
  background: #FFFFFF;
  border: 1px solid #DDF8FC;
  box-sizing: border-box;
  padding-top: 1.5rem;
  padding-bottom:0.5rem;
  border-radius: 5px;
  box-align: center;
  position: absolute;
  top: 50vh;
  left: 77%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  

  `

  export const InputDiv = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items:flex-start
`;


