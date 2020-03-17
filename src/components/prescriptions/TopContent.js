import React,{useState} from 'react';
import Modal from './Modal';
import '../prescriptionCard/styles.css'
const TopContent = () => {

  const [show,setShow] = useState(false)

  const handleShow = (e)=>{
    e.preventDefault()
    setShow(true)
  }

  const handleHide =(e)=>{
    e.preventDefault()
    setShow(false)
  }
  return(
  <div className="top-content">
    <div className="compose__message_wrapper">
      <Modal handleShow={handleShow} handleHide={handleHide} show={show}/>
    <button className="compose__message_btn" onClick={handleShow} >
            CREATE
    </button>
  </div>
    {/* <input className="first" placeholder="search" name = "searchName" onChange={inputChange}/> */}
  </div>
  );
}

export default TopContent;
