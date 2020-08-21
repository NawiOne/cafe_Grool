import React from "react";



class ModalCheckout extends React.Component {
    render() {
        return (
            <>
                <div className="modal fade checkout" id="checkout" tabIndex="-1" aria-labelledby="checkout" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
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
                                <div className="row ml-1 mr-1">
                                    <div className="col-6 d-flex justify-content-start">
                                        <p>Coffee Latte 1x</p>
                                    </div>
                                    <div className="col-6 d-flex justify-content-end">
                                        <p>Rp. 15000</p>
                                    </div>
                                </div>
                                <div className="row ml-1 mr-1">
                                    <div className="col-6 d-flex justify-content-start">
                                        <p>Ppn 10%</p>
                                    </div>
                                    <div className="col-6 d-flex justify-content-end">
                                        <p>Rp. 15000</p>
                                    </div>
                                </div>
                                <div className="row ml-1 mr-1">
                                    <div className="col-6 d-flex justify-content-start">
                                        
                                    </div>
                                    <div className="col-6 d-flex justify-content-end">
                                        <p>Total: Rp. 130000</p>
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
    }
}

export default ModalCheckout;

