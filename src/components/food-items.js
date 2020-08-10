import React from "react";
import Food from "./food";
import Axios from "axios"

class FoodItem extends React.Component {
    constructor(){
        super();
        this.state = {
            menu :[],
            carts :[]
        }
    }

    getAllMenu = () =>{
        const query = process.env.REACT_APP_GET_MENU;
        Axios.get(query).then((res) =>{
            this.setState({
                menu : res.data.data
            })
            console.log(this.state.menu)
        }).catch((err) =>{
            console.log(err)
        })
    }

    getCart = () =>{
        const getCart = process.env.REACT_APP_GET_CART;
        Axios.get(getCart)
        .then((res) =>{
            this.setState({
                carts : res.data.data
            })
            console.log(this.state.carts)
        })
    }
    componentDidMount = () =>{
        this.getAllMenu();
        this.getCart()
    }
   
    render() {
        return (
            <>
                <div className="items">
                    <div className="row">
                            <Food 
                             menus ={this.state.menu}
                             getCart={() => this.getCart()}
                             getMenu={() => this.getAllMenu()}
                             
                             />
                    </div>
                </div>
            </>
        );
    }
}

export default FoodItem;