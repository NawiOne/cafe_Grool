import React from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { logoutCreator } from "../redux/actions/auth";
import { cancelCartCreator, getMenuCreator } from "../redux/actions/menuAndCart";
import { Popover, OverlayTrigger } from "react-bootstrap";

const fork = require("../img/fork.png");
const clipBoard = require("../img/clipboard.png");
const add = require("../img/add.png");
const logout = require("../img/logout2.png");

const popover = (
  <Popover id='popover-basic'>
    <Popover.Content
      style={{
        display: "flex",
        flexDirection: "column",
        width: "16vw",
        height: "14vh",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <h3 style={{ fontSize: "17px", fontWeight: "bolder" }}>
        You are not admin
      </h3>
    </Popover.Content>
  </Popover>
);

const LeftBar = (props) => {
  const {auth} = useSelector((state) => state)
  const dispatch = useDispatch();

  return (
    <>
      <div className={props.animate.leftBarDisplay ? "left hide" : "left"}>
        <ul className='nav flex-column'>
          <li className='nav-item' onClick={() => dispatch(getMenuCreator())}>
              <button className='nav-link active'>
                <img alt='fork' src={fork} />
              </button>
          </li>

          {auth.user.id_level === 1? (
            <li className='nav-item'>
              <Link to='/history'>
                <button className='nav-link'>
                  <img alt='clip' src={clipBoard} />
                </button>
              </Link>
            </li>
          ) : (
            <OverlayTrigger trigger='click' placement='right' overlay={popover}>
              <li className='nav-item'>
                <button className='nav-link'>
                  <img alt='clip' src={clipBoard} />
                </button>
              </li>
            </OverlayTrigger>
          )}

          <li
            className={
              auth.user.id_level  === 1
                ? "nav-item add"
                : "nav-item add hide"
            }
          >
            <button
              className='nav-link'
              data-toggle='modal'
              data-target='#modal-add'
            >
              <img alt='add' src={add} />
            </button>
          </li>
          <li className='nav-item ml-2'>
            <Link to='/'>
              <button className='nav-link'>
                <img
                  alt='clip'
                  src={logout}
                  onClick={() => {
                    props.logoutCreator();
                    props.cancelCartCreator();
                  }}
                />
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  const { animate } = state;
  return {
    animate,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logoutCreator: () => {
      dispatch(logoutCreator());
    },
    cancelCartCreator: () => {
        dispatch(cancelCartCreator())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftBar);
