import React from "react";
import { useDispatch } from "react-redux";
import { searchMenuCreator } from "../redux/actions/menuAndCart";
import { Modal } from "react-bootstrap";
import search from "../img/search.png";
import '../css/modalSearch.css'

const ModalSearch = ({ show, handleClose }) => {
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(searchMenuCreator(e.target.value, 'name'))
        handleClose()
    }


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Search your food</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='form-search'>
            <input type='text' placeholder='Search' className='input-search' onKeyPress ={(e) => {
                if(e.key === 'Enter'){
                    handleSearch(e)
                }
            }}></input>
            <img src={search} alt="" className='search-logo'/>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalSearch;
