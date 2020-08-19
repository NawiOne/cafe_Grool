import React from "react";
import EmptyCart from "../components/empty-cart";



class ListCart extends React.Component {
    componentDidUpdate = () => {
        this.props.getCart();
    };

    render() {
        if(this.props.carts.length) {
            return (
                <>
                            <div className="row m-4 ">
                                <div className="col-sm-4 col-md-4 cart-item">
                                    <div className="img-cart">
                                        <img src='' className="pic" alt="pic"/>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-md-4">
                                    <div className="name-cart">
                                        <p>{}</p>
                                        <div className="counter">
                                            <button>-</button>
                                            <span>{}</span>
                                            <button>+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-md-4 d-flex align-items-end justify-content-center">
                                    <div className="price-cart">
                                        <p className="m-1">Rp.10000</p>
                                    </div>
                                </div>
                            </div>
                        );               
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
                                <button type="button" className="btn btn-blue btn-lg btn-block mb-3">Cancel</button>
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