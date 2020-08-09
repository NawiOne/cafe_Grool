import React from "react";
const menu = require('../img/menu.png');
const search = require('../img/search.png')

class Header extends React.Component {
    constructor(props){
        super(props);
        
    this.handleClickMenu= this.handleClickMenu.bind(this)
    }

    handleClickMenu(){
        this.props.ifClickMenu()
    }
    

    render() {
        return (
            <>
                <div className="col-12 header shadow">
                        <nav className="nav">
                            <a href="#" className="nav-item mr-auto ml-3 hbgr" onClick={this.handleClickMenu}><img src={menu} alt="menu" /></a>
                            <h3>food items</h3>
                            <a href="" className="nav-item ml-auto pr-3"><img src={search} alt="search" /></a>
                        </nav>
                </div>
            </>
        );
    }
}

export default Header;
