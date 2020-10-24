import React from "react";
import { Modal } from "react-bootstrap";
import "../css/modal.css";
import { useDispatch} from "react-redux";
import { logoutCreator } from "../redux/actions/auth";
import { cancelCartCreator } from "../redux/actions/menuAndCart";

const ModalLogout = ({ show, handleClose }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <h3>Logout ?</h3>
        </Modal.Header>
        <Modal.Body className='modal-select-body'>
          <button
            className='modal-select-btn btn'
            onClick={() => {
              handleClose();
              dispatch(logoutCreator());
              dispatch(cancelCartCreator());
            }}
          >
            Ok
          </button>
          <button className='modal-select-btn btn' onClick={handleClose}>
            Cancel
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalLogout;
