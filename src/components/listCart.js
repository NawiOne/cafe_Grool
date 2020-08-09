import React from "react";
class ListCart extends React.Component {
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
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4">
                        <div className="price-cart">
                            <p>{cart.price}</p>
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