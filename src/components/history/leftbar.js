import React from "react";
const fork = require('../../img/fork.png');
const clipboard = require('../../img/clipboard.png');
const add = require('../../img/add.png');
class LeftBar extends React.Component {
    render() {
        return (
            <>
                <aside className={this.props.displayed
                ? "left-bar pt-3 shadow" 
                : "left-bar pt-3 shadow hide"}>
                    <ul className="nav flex-column">
                        <li className="nav-item pl-auto">
                            <button className="nav-link bg-transparent" href=""><img src={fork} alt="" /></button>
                        </li>
                        <li className="nav-item ">
                            <button className="nav-link bg-transparent" href=""><img src={clipboard} alt="" /></button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link  bg-transparent" href="#"><img src={add} alt="" data-toggle="modal" data-target="#modal-add"/></button>
                        </li>
                    </ul>
                </aside>


            </>
        );
    }
}
export default LeftBar;