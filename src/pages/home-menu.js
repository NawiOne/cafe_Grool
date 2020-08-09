import React from "react";
// import { Link } from "react-router-dom";
// import Axios from "axios";

import Header from "../components/header";
import LeftBar from "../components/leftBar";
import FoodItem from "../components/food-items";
import CartBar from "../components/CartBar"
import ModalAdd from "../components/modalAdd";
 
 
class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            RightBarDisplay : false,
        };
        this.handleClickRightBar = this.handleClickRightBar.bind(this);
    }
    handleClickRightBar = () =>{
        this.setState({
            RightBarDisplay :!this.state.RightBarDisplay
        })
    }
   
    render() {
        return (
            <>  
                <div className="row">
                   <div className="col-md-8 col-12">
                        <div className="row">
                            <Header  ifClickMenu ={this.handleClickRightBar}/>
                        </div>
                        <div className="row">
                            <div className="main">
                                <LeftBar/>
                                <FoodItem/>
                                <ModalAdd/>
                            </div>
                        </div>
                   </div>
                   <CartBar  displayed ={this.state.RightBarDisplay} />
                </div>
                
            </>
            
        )
    }
}

export default Home