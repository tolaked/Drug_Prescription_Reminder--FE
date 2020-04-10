import React from 'react'
import "./styles.css";

const SinglePrescription =({prescriptions, handleShowModal, handleDelete, setShow, setUsageCard})=> {

    return (
        <div className="row">
             {(prescriptions.length > 0) ? prescriptions.map(pres => (
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
        : <h2>You have no prescriptions</h2>
      }
     
        </div>
    )
}

export default SinglePrescription
