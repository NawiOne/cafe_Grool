import React from "react";

const fork = require('../img/fork.png');
const clipBoard = require('../img/clipboard.png');
const add = require('../img/add.png');


class LeftBar extends React.Component {
    render() {
        return (
            <>
                
                <div className="left">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" ><img src={fork} /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src={clipBoard} /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" data-toggle="modal" data-target="#modal-add"><img src={add} /></a>
                        </li>
                    </ul>
                </div>
                
            </>
        );
    }
}

export default LeftBar;