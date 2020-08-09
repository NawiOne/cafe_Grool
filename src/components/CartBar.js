import React from "react";
import Cart from "../components/cart";
import RightBar from "../components/rightbar";

class CartBar extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className={this.props.displayed
                ? "col-md-4 cartBar show" 
                : "col-md-4 cartBar"}>
                <Cart />
                <RightBar />
            </div>
        );
    }
}

export default CartBar;
