import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {addFormula} from '../../state/actions/usageFormula'
import {InputDiv} from '../auth/Login'
import Input from '../../reusables/Input';
import Label from '../../reusables/Label';
import {StyledForm} from '../prescriptions/Modal'
import '../prescriptionCard/styles.css'

function UsageFormulaForm({handleHide, show, children}) {
    const initialState = {
        frequency : '',
        dose: '',
        number_of_times:'',
        duration:'',
        before_after_meal:''
    }
    const [form,setForm] = useState(initialState)

    const showHideClassName = show ? "modal display-usage" : "modal hide-display";

    const prescription_id = useSelector(state => state.prescription.prescription._id) || ''

  const dispatch = useDispatch();
  
    const handleChange =(e)=>{
        const { name, value } = e.target;
        e.preventDefault()
        setForm(prevState=>({
            ...prevState,[name]:value
        }))
    }
    const handleSubmit =(e,id)=>{
      e.preventDefault()
      dispatch(addFormula(form,id))
      setForm(initialState)
    }

    return (
        <div className={showHideClassName}>
        <section className="formula-modal">
            {children}
            
            <StyledForm onSubmit={(e)=>handleSubmit(e,prescription_id)}>
            <div className='close' onClick={handleHide}>x</div>
            <h4 style={{marginBottom:'25px',marginTop:'5px'}}>Add usage formula</h4>
            <InputDiv>
            <Label medium htmlFor='frequency'>Frequency</Label>
            <Input
            small
            type='text'
            name='frequency'
            id='frequency'
            value={form.frequency}
            onChange={handleChange}
            />
            </InputDiv>
            <InputDiv>
            <Label medium htmlFor='dose'>Dose</Label>
            <Input
            small
            id='dose'
            type='number'
            name='dose'
            value={form.dose}
            onChange={handleChange}
            />
            </InputDiv>
            <InputDiv>
             <Label medium htmlFor="number_of_times">Number of times(daily)</Label>
        <Input small
         type="number"
          id="number_of_times"
           name="number_of_times"
           value={form.number_of_times}
           onChange={handleChange}
           />
        </InputDiv>
        <InputDiv>
            <Label medium htmlFor='duration'>Duration</Label>
            <Input 
            small 
            type="text"
            id="duration" 
            name="duration"
            value={form.duration}
            onChange={handleChange}
            />
            </InputDiv>
            <InputDiv>
            <Label medium htmlFor='meal'>Before or after meal</Label>
            <Input 
            small 
            type="text"
            id="meal" 
            name="before_after_meal"
            value={form.before_after_meal}
            onChange={handleChange}
            />
            </InputDiv>
            <button
            type="primary"
            type="primary" 
            style={{width: '18.5rem',
            background:'#4FB4C2',
            height: '2.5rem',
            fontSize:"16px",
            color:'white',
            borderRadius: '5px',}} >
            Add prescription
          </button>
          
        </StyledForm>
        </section>
        </div>
    )
}



export default UsageFormulaForm;

