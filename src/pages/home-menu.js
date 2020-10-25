import React, {useState, useEffect} from "react";
import {useDispatch,} from 'react-redux';
import {clearCreator} from '../redux/actions/menuAndCart'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// required Component
import Header from "../components/header";
import LeftBar from "../components/leftBar";
import FoodItem from "../components/food-items";
import RightBar from "../components/rightbar";
import ModalAdd from "../components/modalAdd";
import ModalCheckout from "../components/modalCheckout";
import ModalSearch from "../components/modalSearch";
import ModalSelect from '../components/modalAdmin';
import ModalEdit from '../components/modalEdit';


const Home = () => {
    const token = window.localStorage.getItem('token');
    console.log(token)
    const [show, setShow] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleHideSearch = () => setShowSearch(false);
    const handleSowSearch = () => setShowSearch(true);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearCreator())
        
    },[])

        return (
            <>
                <ToastContainer />
                <div className="row">
                    <div className="col-md-8 col-12">
                        <div className="row">
                            <Header handleShow={handleSowSearch} />
                        </div>
                        <div className="row">
                            <div className="main">
                                <LeftBar/>
                                <FoodItem handleShow={handleShow}/>
                                <ModalAdd />
                                <ModalCheckout/>
                                <ModalSearch show={showSearch} handleClose={handleHideSearch} />
                                <ModalSelect show={show} handleClose={handleClose}/>
                                <ModalEdit />
                            </div>
                        </div>
                    </div>
                    <RightBar/>
                </div>
            </>
        );
    }


export default Home;