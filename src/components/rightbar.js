import React from "react";
// import EmptyCart from "../components/empty-cart";
import ListCart from "../components/listCart";
import Axios from "axios"


class RightBar extends React.Component{
state ={
    carts :[],
    menu: []
}


getCart = () =>{
    const getCart = "http://localhost:8000/cart/getcart";
    Axios.get(getCart)
    .then((res) =>{
        this.setState({
            carts : res.data.data
        })
    
    })

}

componentDidMount = () =>{
    this.getCart();
    
    
  
}

    render(){ 
        return(
            <div className="row ">
                <div className="col-12 right-bar">
                   <ListCart  
                   carts ={this.state.carts}
                   getCart={() => this.getCart()}
                   />
                </div>
            </div>
        )
    }
}
export default RightBar;