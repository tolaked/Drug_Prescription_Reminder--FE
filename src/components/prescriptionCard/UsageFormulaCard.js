import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {addFormula} from '../../state/actions/usageFormula'
import {InputDiv} from '../auth/Login'
import Input from '../../reusables/Input';
import Label from '../../reusables/Label';
import {StyledForm} from '../prescriptions/Modal'
import '../prescriptionCard/styles.css'

function UsageFormulaCard({handleHide, show, children}) {
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
            <div className='close' onClick={handleHide}>x</div>
            <StyledForm onSubmit={(e)=>handleSubmit(e,prescription_id)}>
            <h4>Add usage formula</h4>
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



export default UsageFormulaCard;

