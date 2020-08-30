import React from "react";
import { connect } from "react-redux";

import {getMenuCreator, addCartCreator} from '../redux/actions/menuAndCart';


const Thick = require('../img/thick-figma.png');

class FoodItem extends React.Component {
    componentDidMount(){
        this.props.getMenuCreator()
        
    }
    
    render(){
        
        if(this.props.menuAndCart.data.length) {
            return (
                <>
                    <div className="items">
                        <div className="row">
                            {
                                this.props.menuAndCart.data.map((menu) => {
                                    return (
                                        <div className="col-12 col-sm-6 col-lg-4 food" key={menu.id_menu}>
                                            <div className="card bg-transparent">
                                                <div className="image-card">
                                                    <img src={menu.picture} className="img-card" alt=" food"
                                                        onClick={() =>{
                                                            this.props.addCartCreator(
                                                                menu.id_menu,
                                                                menu.name,
                                                                menu.price,
                                                                menu.picture)
                                                                console.log(menu.name)}}                                                
                                                    />
                                                    <div className="checklist">
                                                        <img alt="thick" src={Thick} />
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">{menu.name}</h5>
                                                    <p>Rp. {menu.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </>
            );
    
        } else {
            return (
                <>
                    <div className="items empty d-flex align-items-center">
                        <div className="empty-cart">
                            <h2>Sorry, menu is unavailable</h2>
                            <h5 className="text-muted">pelase search another menu</h5>
                        </div>
                    </div>
                </>
            );
        }
    }

};

const mapStateToProps = (state) => {
    const {menuAndCart} = state
    return{
        menuAndCart
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getMenuCreator: (menuAndCart) =>{
           dispatch(getMenuCreator(menuAndCart))
        },
        addCartCreator: (id,name, price, img) =>{
            dispatch(addCartCreator(id, name, price, img))
        },
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FoodItem);