import React from "react";
// required Component
import Header from "../components/header";
import LeftBar from "../components/leftBar";
import FoodItem from "../components/food-items";
import RightBar from "../components/RightBar";
import ModalAdd from "../components/modalAdd";
import ModalCheckout from "../components/modalCheckout";
import ModalSearch from "../components/modalSearch";


class Home extends React.Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-8 col-12">
                        <div className="row">
                            <Header/>
                        </div>
                        <div className="row">
                            <div className="main">
                                <LeftBar/>
                                <FoodItem/>
                                <ModalAdd />
                                <ModalCheckout/>
                                <ModalSearch/>
                            </div>
                        </div>
                    </div>
                    <RightBar/>
                </div>
            </>
        );
    }
}


export default Home;