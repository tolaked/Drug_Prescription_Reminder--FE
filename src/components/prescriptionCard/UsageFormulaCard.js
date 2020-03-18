import React,{useState} from 'react'
import Styled from 'styled-components';
import { connect } from 'react-redux';
import {addPrescription} from '../../state/actions/prescription'
import {InputDiv} from '../auth/Login'
import '../prescriptionCard/styles.css'

function UsageFormulaCard({handleHide, show, children}) {
    const initialState = {
        drug : '',
        unit: '',
        start_Date:'',
        end_Date:''
    }
    const [form,setForm] = useState(initialState)
    const showHideClassName = show ? "modal display-usage" : "modal hide-display";

    return (
        <div className={showHideClassName}>
        <section className="modal-main">
            {children}
            <div className='close' onClick={handleHide}>x</div>
      <form>

      </form>
        </section>
        </div>
    )
}



export default UsageFormulaCard;

const StyledForm = Styled.form`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-left:45px
 
  `

