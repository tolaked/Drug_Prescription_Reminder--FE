import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFormula } from "../../state/actions/usageFormula";
import "../prescriptionCard/styles.css";

function UsageFormulaCard({ handleHide, usageCard, children }) {
  const showHideClassName = usageCard
    ? "modal display-formula"
    : "modal hide-formula";

  const formula = useSelector(state => state.usageFormula.formula) || "";

  return (
    <div className={showHideClassName}>
      <section className="usage-modal">
        {children}
        <div className="close" onClick={handleHide}>
          x
        </div>
        <h1>Usage formula</h1>

        {formula && formula._id ? (
          <div className="usageFormula-card">
            <h4 style={{ margin: "0px" }}>frequency:{formula.frequency}</h4>
            <h4>Dose:{formula.dose}</h4>
            <h4>To be taken:{formula.number_of_times} times</h4>
            <button>Edit formula</button>
          </div>
        ) : (
          <p>No usage formula for this prescription</p>
        )}
      </section>
    </div>
  );
}

export default UsageFormulaCard;
