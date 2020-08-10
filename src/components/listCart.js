import React from "react";
import Axios from "axios";
import EmptyCart from "../components/empty-cart";



class ListCart extends React.Component {
    state = {
        cart : null,
    }
    quan = () =>{
        this.props.carts.map((item) =>{
             return this.setState({
                 cart: item.quantity
             })
        })
    }
    componentDidMount(){
        this.quan()
    }

    increase = (id_cart, quantity, price) => {
        const urlUpdate = process.env.REACT_APP_UPDATE_CART;
        const quantityNew = quantity + 1;
        Axios.patch(urlUpdate, {
            quantity: quantityNew,
            total: quantityNew * price,
            id_cart: id_cart
        }).then(() => {
            this.props.getCart();
        });

    };
    decrease = (id_cart, quantity, price) => {
        if(quantity > 1) {
            const queryUpdate = process.env.REACT_APP_UPDATE_CART;
            const quantityNew = quantity - 1;
            Axios.patch(queryUpdate, {
                quantity: quantityNew,
                total: quantityNew * price,
                id_cart: id_cart
            }).then(() => {
                this.props.getCart();
            });
        }

    };
    delCart = () => {
        const urlDelAll = process.env.REACT_APP_DEL_CART;
        Axios.delete(urlDelAll)
            .then(() => {
                console.log('delete all success');
            });
    };

    componentDidUpdate = () => {
        this.props.getCart();
    };

    render() {
        if(this.props.carts.length) {
            return (
                <>
                    {this.props.carts.map((cart) => {
                        return (
                            <div className="row m-4 ">
                                <div className="col-sm-4 col-md-4 cart-item">
                                    <div className="img-cart">
                                        <img src={cart.picture} className="pic" alt="pic"/>
                                    </div>

                                </div>
                                <div className="col-sm-4 col-md-4">
                                    <div className="name-cart">
                                        <p>{cart.name}</p>
                                        <div className="counter">
                                            <button
                                                onClick={() => {
                                                    this.decrease(
                                                        cart.id_cart,
                                                        cart.quantity,
                                                        cart.price
                                                    );
                                                }}
                                            >-</button>
                                            <span>{cart.quantity}</span>
                                            <button
                                                onClick={() => {
                                                    this.increase(
                                                        cart.id_cart,
                                                        cart.quantity,
                                                        cart.price
                                                    );
                                                }}
                                            >+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-md-4 d-flex align-items-end justify-content-center">
                                    <div className="price-cart">
                                        <p className="m-1">Rp. {cart.total}</p>
                                    </div>
                                </div>
                            </div>
                        );


                    })}                
                    <div className="checkout">
                        <div className="row m-4">
                            <div className="col-12 d-flex justify-content-between mt-1">
                                <h3 className="">Total:</h3>
                                <h3>Rp. 6020000</h3>
                            </div>
                        </div>
                        <div className="row m-4">
                            <div className="col-12 text-left">
                                <p>*Belum termasuk Ppn</p>
                            </div>
                        </div>
                        <div className="row mt-2 btn-cart text-center">
                            <div className="col-12">
                                <button type="button" className="btn btn-pink btn-lg btn-block mb-3" data-toggle="modal" data-target="#checkout">Checkout</button>
                                <h5>or</h5>
                                <button type="button" className="btn btn-blue btn-lg btn-block mb-3" onClick={() => this.delCart()} >Cancel</button>
                            </div>
                        </div>
                    </div>

                </>
            );
        } else {
            return <EmptyCart />;
        }

    }
}

export default ListCart;