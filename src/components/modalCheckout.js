import React from "react";


const ModalCheckout = (props) => {
    const price =
        props.arrCart.map((el) => {
            return el.price * el.quantity;
        });
    const total = price.reduce((total, index) => {
        return total + index;
    }, 0);

    const ppn = total * (10/100)
    const totalPpn = total + ppn
    

    return (
        <>
            <div className="modal fade checkout" id="checkout" tabIndex="-1" aria-labelledby="checkout" aria-hidden="true"
            key="menu">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="row ml-1 mr-1">
                                <div className="col-6 d-flex justify-content-start">
                                    <h4>Checkout </h4>
                                </div>
                                <div className="col-6 d-flex justify-content-end">
                                    <h5>Receipt no: #0184375</h5>
                                </div>
                            </div>
                            <div className="row ml-1 mr-1">
                            </div>
                            {props.arrCart.map((cart) => {
                                return (
                                    <>
                                        <div className="row ml-1 mr-1" key={cart.id_menu}>
                                            <div className="col-6 d-flex justify-content-start" key={cart.id_menu}>
                                                <p>{cart.name} {cart.quantity}x</p>
                                            </div>
                                            <div className="col-6 d-flex justify-content-end">
                                                <p>Rp. {cart.price*cart.quantity}</p>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                            <div className="row ml-1 mr-1">
                                <div className="col-6 d-flex justify-content-start">
                                    <p>Ppn 10%</p>
                                </div>
                                <div className="col-6 d-flex justify-content-end">
                                    <p>Rp. {ppn}</p>
                                </div>
                            </div>
                            <div className="row ml-1 mr-1">
                                <div className="col-4 d-flex justify-content-start">

                                </div>
                                <div className="col-8 d-flex justify-content-end">
                                    <p>Total: Rp. {totalPpn}</p>
                                </div>
                            </div>
                            <div className="row ml-1 mr-1">
                                <div className="col-6 d-flex justify-content-start">
                                    Payment: Cash
                                    </div>
                                <div className="col-6 ">

                                </div>
                            </div>

                        </div>
                        <div className="modal-footer ">
                            <button type="button" className="btn btn-pink btn-lg btn-block " data-dismiss="modal">Print</button>
                            <button type="button" className="btn btn-blue btn-lg btn-block" data-dismiss="modal">Send Email</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default ModalCheckout;

