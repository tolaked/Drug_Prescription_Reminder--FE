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
import "./styles.css";

const PrescriptionCard = () => {
  const [shows, setShow] = useState(false);
  const [usageCard, setUsageCard] = useState(false);

  console.log("rerender");

  const prescriptions =
    useSelector(state => state.prescription.prescriptions) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrescriptions());
  }, [dispatch]);

  const handleShowModal = (e, cb = setShow || setUsageCard, id) => {
    e.preventDefault();
    if (cb === setShow) {
      dispatch(fetchSinglePrescription(id));
    } else if (cb === setUsageCard) {
      dispatch(getFormula(id));
    }
    cb(true);
  };
  const formula = useSelector(state => state.usageFormula.formula) || "";

  const handleHideModal = (e, cb) => {
    e.preventDefault();
    cb(false);
  };
  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deletePrescription(id));
  };

  return (
    <div>
      <UsageFormulaForm
        handleHide={e => handleHideModal(e, setShow)}
        show={shows}
      />
      <div className="row">
        <UsageFormulaCard
          handleHide={e => handleHideModal(e, setUsageCard)}
          usageCard={usageCard}
          formula={formula}
        />
        {(prescriptions.length > 0)? prescriptions.map(pres => (
          <div key={pres._id} className="card">
            <div>
              <h2 className="h2">{pres.drug}</h2>
              <p>Start Date: {pres.start_Date}</p>
            </div>
            <div>
              <h2 className="h2">End Date:</h2>
              <p> {pres.end_Date}</p>
              <div className="btn-container">
                <button
                  className="add-formular-btn btn"
                  onClick={e => handleShowModal(e, setShow, pres._id)}
                >
                  Add formula
                </button>
                <button
                  className="btn view-usage"
                  onClick={e => handleShowModal(e, setUsageCard, pres._id)}
                >
                  View usage
                </button>
                <button
                  className="delete-presc btn"
                  onClick={e => {
                    handleDelete(e, pres._id);
                  }}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        ))
        : <h3>You have no prescriptions yet</h3>
      }
      </div>
    </div>
  );
};

export default PrescriptionCard;
