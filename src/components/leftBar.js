import React from "react";
import {Link} from "react-router-dom";

const fork = require('../img/fork.png');
const clipBoard = require('../img/clipboard.png');
const add = require('../img/add.png');


class LeftBar extends React.Component {
    render() {
        return (
            <>

                <div className={this.props.displayed
                    ? "left hide"
                    : "left"}>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/history" ><button className="nav-link active" ><img alt="fork" src={fork} /></button></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/"><button className="nav-link"><img alt="clip" src={clipBoard} /></button></Link>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" data-toggle="modal" data-target="#modal-add"><img alt="add" src={add} /></button>
                        </li>
                    </ul>
                </div>

            </>
        );
    }
}

export default LeftBar;