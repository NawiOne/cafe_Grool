import React from "react";
const menu = require('../img/menu.png');
const search = require('../img/search.png')

class Header extends React.Component {
    handleClickMenu =() =>{
        this.props.ifClickMenu()
    }
    
    render() {
        return (
            <>
                <div className="col-12 header shadow">
                        <nav className="nav">
                            <button className="nav-item mr-auto ml-2 hbgr" onClick={this.handleClickMenu}><img src={menu} alt="menu" /></button>
                            <h3>food items</h3>
                            <button className="nav-item ml-auto pr-3"><img src={search} alt="search" /></button>
                        </nav>
                </div>
            </>
        );
    }
}

export default Header;
