import React from "react";
const menu = require('../img/menu.png');
const search = require('../img/search.png');
const basket = require('../img/basket.png');

class Header extends React.Component {
    handleClickMenu = () => {
        this.props.ifClickMenu();
    };
  

    render() {
        return (
            <>
                <div className="col-12 header shadow">
                    <nav className="nav">
                        <button className="nav-item ml-2 hbgr" ><img src={menu} alt="menu"/></button>
                    </nav>
                    <nav className="nav">
                        <h3>food items</h3>
                    </nav>
                    <nav className="nav">
                        <button className="nav-item "><img src={search} alt="search" /></button>
                        <button className="nav-item basket mr-3"  onClick={this.handleClickMenu}><span>{this.props.arrCart.length}</span><img src={basket} alt="search" 
                       /></button>
                    </nav>
                </div>
            </>
        );
    }
}

export default Header;
