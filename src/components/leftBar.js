import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import jwt from 'jsonwebtoken';
import {logoutCreator} from '../redux/actions/auth'

const fork = require('../img/fork.png');
const clipBoard = require('../img/clipboard.png');
const add = require('../img/add.png');
const logout = require('../img/logout2.png')


const LeftBar= (props) => {
    const token = window.localStorage.getItem('token');
    const decode = jwt.decode(token);
    const level = decode.id_level;

        return (
            <>
                
                <div className={props.animate.leftBarDisplay
                    ? "left hide"
                    : "left"}>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/history" ><button className="nav-link active" ><img alt="fork" src={fork} /></button></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/"><button className="nav-link"><img alt="clip" src={clipBoard} /></button></Link>
                        </li>
                        <li className={level !== null && level === 1 ? "nav-item add" : "nav-item add hide"}>
                            <button className="nav-link" data-toggle="modal" data-target="#modal-add"><img alt="add" src={add} /></button>
                        </li>
                        <li className="nav-item ml-2">
                            <Link to="/"><button className="nav-link"><img alt="clip" src={logout} onClick={props.logoutCreator}/></button></Link>
                        </li>
                    </ul>
                </div>

            </>
        );
    
}
const mapStateToProps = (state) => {
    const {animate} = state
    return{
        animate
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        logoutCreator: ()=>{
            dispatch(logoutCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftBar);