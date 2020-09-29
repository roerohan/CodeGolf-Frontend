import React , { useState } from "react";
import { Modal } from "react-bootstrap";

import ModalButton from "../../assets/Modal/Modal-Button.svg";
import ModalBody from "../../assets/Modal/Modal.png";
import "./modal.css";

const ModalBox = () => {
  var [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img src={ModalButton} alt="modal-button.svg" className= "modal-button" onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
          <img src={ModalBody} alt="modal.png"/>
      </Modal>
    </>
  );
};

export default ModalBox;
