import React from "react";
const close = require('../img/close.png')
require('../css/cart.css')



class Cart extends React.Component {
    constructor(){
        super();
        this.state = {
            carts : [],
        }
    } 
    render() {
        return (
            <div className="row">
                <div className="col-12 cart shadow">
                <ul className="nav justify-content-center mr-auto">
                        <li className="nav-item">
                            <button className="close"><img src={close} alt="close" className="close-btn"
                            onClick={this.props.click}></img></button>  
                        </li>
                    </ul>
                    <ul className="nav mr-auto mt-1">
                        <li className="nav-item center">
                            <p>Cart <span className="badge badge-info">{this.props.arrCart.length}</span></p>  
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Cart;