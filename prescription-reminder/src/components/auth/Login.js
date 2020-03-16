import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import { Button as AntButton } from 'antd';
import validate from 'validate.js';
import Header from '../../reusables/Header'
import Input from '../../reusables/Input';
import Label from '../../reusables/Label';
import '../../assets/styles/styles.css'
import Background from '../../assets/images/background-image.jpeg'

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

 

const Login =()=> {
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
      };
    return (
        <div >
           <Header/>
           <div className='homepage'>
           <div className='left-side'>
               <section className='welcome-note'>
                   <div>
                   <h2>Welcome to pilltol app</h2>
                   <h4>An app that helps you keep track of your drug prescriptions</h4>
                   </div>
                   <img className='app-image' src={Background} alt='app-image'/>
               </section>
               </div>
                   <BorderDiv>
                   <StyledForm>
                       <InputDiv>
                       <Label
              medium
              weight="bold"
            >
              Email
            </Label>
                   <Input
              medium
              type="text"
              onChange={handleChange}
              name="username"
              value={formState.values.username || ''}
            />
            {
              hasError('username') ? <p color="hsla(359,98%,68%,1)">{formState.errors.username[0]}</p> : null
            }
          </InputDiv>
          <InputDiv>
            <Label
              medium
              weight="bold"
            >
              Password
            </Label>
            <Input
              medium
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
            // loading={!!(error && error.status)}
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
          <p>Don't have an account? signup here</p>
                   </StyledForm>
                   
                   
               </BorderDiv>
           </div>
           
        </div>
    )
}

const BorderDiv= styled.div`
  `
  const StyledForm = styled.form`
  width: 400px;
  height: 400px;
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

export default Login
