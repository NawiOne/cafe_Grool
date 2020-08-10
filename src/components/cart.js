import React from "react";
import Axios from "axios"


class Cart extends React.Component {
    constructor(){
        super();
        this.state = {
            carts : []
        }
    }



    getCart = () =>{
        const getCart = process.env.REACT_APP_GET_CART;
        Axios.get(getCart)
        .then((res) =>{
            console.log(res.data.data)
            this.setState({
                carts : res.data.data
            },console.log(this.state.carts))
        
        })
    
    }
    componentDidMount(){
        this.getCart()
    }
    componentDidUpdate(){
        this.getCart()
    }


   
    render() {
        return (
            <div className="row">
                <div className="col-12 cart shadow">
                    <ul className="nav justify-content-center ">
                        <li className="nav-item">
                            <p>Chart <span className="badge badge-primary">{this.state.carts.length}</span></p>  
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Cart;