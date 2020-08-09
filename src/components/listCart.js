import React from "react";
class ListCart extends React.Component {
        constructor() {
            super();
            this.state = {
                quantity : 1
            }
        
        }
        

    handleMin = () =>{
        if(this.state.quantity > 1){
            this.setState({
            quantity : this.state.quantity -1
        })
        }
        
    }
    handlePlus = () =>{
        this.setState({
            quantity : this.state.quantity +1
        })
    }
    

    componentDidUpdate(){
        this.props.getCart()
    }

    render() {
        return (
            <>
               
                {this.props.carts.map((cart) =>{
                    return(
                        <div className="row m-4">
                    <div className="col-sm-4 col-md-4">
                        <div className="img-cart">
                            <img src={cart.picture} className="pic" />
                        </div>

                    </div>
                    <div className="col-sm-4 col-md-4">
                        <div className="name-cart">
                            <p>{cart.name}</p>
                            <div className="counter">
                                <button
                                onClick={this.handleMin}
                                >-</button>
                                <span>{this.state.quantity}</span>
                                <button
                                onClick={this.handlePlus}
                                >+</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 d-flex align-items-end">
                        <div className="price-cart">
                            <p>Rp. {this.state.quantity*cart.price}</p>
                        </div>
                    </div>
                </div>
                    )
                })}
                
            </>
        );
    }
}

export default ListCart;