import React from "react";
import CartHeader from "./cartHeader";
import RightBar from "../components/rightbar";

class CartBar extends React.Component {
 
    render() {
        return (
            <div className={this.props.displayed
                ? "col-md-4 cartBar show" 
                : "col-md-4 cartBar"}>
                <CartHeader />
                <RightBar />
            </div>
        );
    }
}

export default CartBar;
