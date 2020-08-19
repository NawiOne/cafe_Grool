import React from "react";



class Cart extends React.Component {
    constructor(){
        super();
        this.state = {
            carts : []
        }
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