import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPrescriptions,
  fetchSinglePrescription,
  deletePrescription
} from "../../state/actions/prescription";
import { getFormula } from "../../state/actions/usageFormula";
import UsageFormulaForm from "./UsageFormulaForm";
import UsageFormulaCard from "./UsageFormulaCard";
import EditFormula from './EditFormula';
import SinglePrescription from './SinglePrescription'
import Pagination from './Pagination'
import "./styles.css";

const AllPrescriptions = () => {
  const [shows, setShow] = useState(false);
  const [form, setForm] = useState({})
  const [edit, setEdit] = useState(false)
  const [usageCard, setUsageCard] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const [prescriptionPerPage] = useState(6)



  const prescriptions =
    useSelector(state => state.prescription.prescriptions) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    // const fetchPrescriptions = async()=>{
    //   await dispatch(getPrescriptions())
    // };
    //  fetchPrescriptions()
    dispatch(getPrescriptions())
  }, [dispatch]);

  const handleHideModal = (e, cb) => {
    e.preventDefault();
    cb(false);
  };

  const handleShowModal = (e, cb = setShow || setUsageCard || setEdit, id) => {
    e.preventDefault();
    if (cb === setShow) {
      dispatch(fetchSinglePrescription(id));
    } else if (cb === setUsageCard) {
      dispatch(getFormula(id));
    }
    cb(true);
  };
  const formula = useSelector(state => state.usageFormula.formula)

  const handleEditModal = (e) =>{
    e.preventDefault();
    setEdit(true)
    setUsageCard(false)
    setForm(formula)
  }
  
  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deletePrescription(id));
  };

  const indexOfLastPrescription = currentPage * prescriptionPerPage
  const indexOfFirstPrescription = indexOfLastPrescription - prescriptionPerPage
  const currentPrescriptions = prescriptions.slice(indexOfFirstPrescription, indexOfLastPrescription)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  return (
    <div >
      <UsageFormulaForm
        handleHide={e => handleHideModal(e, setShow)}
        show={shows}
      />
      <EditFormula
      handleHide={e => handleHideModal(e, setEdit)}
        edit={edit}
        form={form}
      />
      <div className="row">
        <UsageFormulaCard
          handleHide={e => handleHideModal(e, setUsageCard)}
          handleEditModal={handleEditModal}
          usageCard={usageCard}
          setEdit={setEdit}
          formula={formula}
        />
       <SinglePrescription prescriptions={currentPrescriptions} 
       handleDelete={handleDelete} 
       handleShowModal={handleShowModal}
       setShow={setShow}
       setUsageCard={setUsageCard}/>
       
      </div>
      <Pagination
        prescriptionPerPage={prescriptionPerPage} 
        totalPrescription={prescriptions.length} 
        paginate={paginate}/>
    </div>
  );
};

export default AllPrescriptions;
