import React,{useState} from 'react'
import Styled from 'styled-components';
import { render } from "react-dom";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import Input from '../../reusables/Input';
import Label from '../../reusables/Label';
import {InputDiv} from '../auth/Login'
import '../prescriptionCard/styles.css'

function Modal({handleHide, show, children}) {
    const initialState = {
        drug : '',
        unit: '',
        start_Date:'',
        end_Date:''
    }
    const [form,setForm] = useState(initialState)
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    const handleChange =(e)=>{
        const { name, value } = e.target;
        e.preventDefault()
        setForm(prevState=>({
            ...prevState,[name]:value
        }))
    }
    return (
        <div className={showHideClassName}>
        <section className="modal-main">
            {children}
            <div className='close' onClick={handleHide}>x</div>
        <StyledForm>
            <h4>Add a new prescription</h4>
            <InputDiv>
            <Label medium for='drug'>Drug</Label>
            <Input
            small
            type='text'
            name='drug'
            id='drug'
            value={form.drug}
            onChange={handleChange}
            />
            </InputDiv>
            <InputDiv>
            <Label medium for='unit'>Unit</Label>
            <Input
            small
            id='unit'
            type='text'
            name='unit'
            value={form.unit}
            onChange={handleChange}
            />
            </InputDiv>
            <InputDiv>
             <Label medium for="start">Start Date:</Label>
        <Input small
         type="date"
          id="start"
           name="start"
           value={form.start_Date}
           onChange={handleChange}/>
        </InputDiv>
        <InputDiv>
            <Label medium for='end'>End Date</Label>
            <Input 
            small 
            type="date"
            id="end" 
            name="end"
            value={form.end_Date}
            onChange={handleChange}/>
            </InputDiv>
            <button
            type="primary"
            
            style={{
              backgroundColor: '#4FB4C2',
              width: '18.5rem',
              height: '3rem',
              fontSize:"16px",
              color:'white',
              borderRadius: '0.5rem',
              cursor:'pointer',
              marginTop:'10px'

            }}
          >
              
            Add prescription
          </button>
          
        </StyledForm>
        </section>
        </div>
    )
}

export default Modal

const StyledForm = Styled.form`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-left:45px
 
  `

