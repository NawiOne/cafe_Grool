import React from "react";

class Cart extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 cart shadow">
                    <ul className="nav justify-content-center ">
                        <li className="nav-item">
                            <p>Chart <span className="badge badge-primary">3</span></p>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Cart;