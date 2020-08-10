import React from "react";

class Card extends React.Component {
    render() {
        
        return (
            <>
                
                    <div className="col-sm-12 col-md-4">
                        <div class="card mb-3 income">
                            <div class="card-body">
                                <p class="title">Today's Income</p>
                                <h3 class="value">Rp. 1.000.000</h3>
                                <p class="prog">+2% Yesterday</p>
                                <div class="round-1"></div>
                                <div class="round-2"></div>
                                <div class="round-3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div class="card mb-3 order">
                            <div class="card-body">
                                <p class="title">Today's Income</p>
                                <h3 class="value">Rp. 1.000.000</h3>
                                <p class="prog">+2% Yesterday</p>
                                <div class="round-1"></div>
                                <div class="round-2"></div>
                                <div class="round-3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div class="card mb-3 year-income">
                            <div class="card-body">
                                <p class="title">Today's Income</p>
                                <h3 class="value">Rp. 1.000.000</h3>
                                <p class="prog">+2% Yesterday</p>
                                <div class="round-1"></div>
                                <div class="round-2"></div>
                                <div class="round-3"></div>
                            </div>
                        </div>
                    </div>
               

            </>
        );
    }
}

export default Card;