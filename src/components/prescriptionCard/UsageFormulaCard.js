import React from "react";
import { useSelector } from "react-redux";
import "../prescriptionCard/styles.css";
import {
  Dialog,

} from "@material-ui/core";

function UsageFormulaCard({ handleHide, usageCard, children, handleEditModal, setEdit }) {
  const showHideClassName = usageCard
    ? "modal display-formula"
    : "modal hide-formula";

  const formula = useSelector(state => state.usageFormula.formula) || "";

  return (
    
    // <div  className={showHideClassName} >
      <Dialog  open={usageCard} onClose={handleHide}>
      <section className="usage-modal">
        <div className="usageFormula-card">
          {children}
          <div className="close" onClick={handleHide}>
            x
          </div>
          <h1>Usage formula</h1>

          {formula && formula._id ? 
            <div>
              <h4>frequency:{formula.frequency}</h4>
              <h4>Dose:{formula.dose}</h4>
              <h4>To be taken:{formula.number_of_times} times</h4>
              <button className="btn" onClick={e => handleEditModal(e, setEdit, formula._id)}>Edit formula</button>
            </div>
           : 
            <p>No usage formula for this prescription</p>
          }
        </div>
      </section>
      </Dialog>
    // </div>
    
  );
}

export default UsageFormulaCard;
