import React, { useState } from "react";
import Modal from "./Modal";
import "../prescriptionCard/styles.css";
const LeftAside = () => {
  const [show, setShow] = useState(false);

  const handleShow = e => {
    e.preventDefault();
    setShow(true);
  };

  const handleHide = e => {
    e.preventDefault();
    setShow(false);
  };
  return (
    <div className="top-content">
      <div className="compose__message_wrapper">
        <Modal handleHide={handleHide} show={show} />
        <button className="compose__message_btn" onClick={handleShow}>
          CREATE
        </button>
      </div>
    </div>
  );
};

export default LeftAside;
