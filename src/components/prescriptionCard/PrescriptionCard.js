import React,{useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {getPrescriptions} from '../../state/actions/prescription'
import UsageFormulaCard from './UsageFormulaCard'
import './styles.css'

const PrescriptionCard =()=> {
  const [shows,setShow] = useState(false)

  const prescriptions = useSelector(state => state.prescription.prescriptions.prescription) || []
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getPrescriptions());
  },[dispatch])

 

  const handleShow = (e)=>{
    e.preventDefault()
    setShow(true)
  }

  const handleHide =(e)=>{
    e.preventDefault()
    setShow(false)
  }
  
  
    return (
        <div>
          <UsageFormulaCard handleHide={handleHide} show={shows}/>
              <div className="row">
       {prescriptions.map((pres) => (
              <div key={pres._id} className='column' onClick={handleShow}>
                <div className='card'>
                <p>{pres.drug}</p>
                <p>{pres.end_Date}</p>
                <p>{pres.start_Date}</p>
                <button>Add usage formula</button>
                <button>Mark as complete</button>
                
                </div>
              </div>

          ))}

    </div>
            
        </div>
    )
}


export default PrescriptionCard;