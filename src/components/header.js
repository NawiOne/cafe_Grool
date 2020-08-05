import React from "react";



class Header extends React.Component {
    render() {
        return (
            <>
                <div className="row no-gutters">
                    <div className="col-8">
                        <div className="col-12 header shadow">
                            <nav className="nav nav-fill">
                                <a class="nav-item" href="#"><img src={require('../../img/hamburger-menu.png')} /></a>
                                <a class="nav-item" href="#">Much longer nav link</a>
                                <a class="nav-item" href="#">Link</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;
