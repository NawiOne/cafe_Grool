import React from "react";
// required Component
import Header from "../components/header";
import LeftBar from "../components/leftBar";
import FoodItem from "../components/food-items";
import RightBar from "../components/RightBar";
import ModalAdd from "../components/modalAdd";
import ModalCheckout from "../components/modalCheckout";
// Axios
import Axios from 'axios';



class Home extends React.Component {
    state = {
        RightBarDisplay: false,
        carts: [],
        menus: []
    };


    getAllMenu = () => {
        const query = "http://localhost:8000/getalldata?page=1&limit=6";
        Axios.get(query).then((res) => {
            this.setState({
                menus: res.data.data
            });
            console.log(this.state.menus);
        }).catch((err) => {
            console.log(err);
        });
    };
    componentDidMount = () => {
        this.getAllMenu();
    };

    addCart = (id, name, price, img) => {
        const index = this.state.carts.findIndex((el) => {
            return el.id_menu === id;
        });
        if(index >= 0) {
            this.state.carts.splice(index, 1);
            this.setState({
                carts: this.state.carts
            });
        } else {
            const cartNew = {
                id_menu: id,
                name: name,
                quantity: 1,
                price: price,
                picture: img
            };
            this.setState({
                carts: this.state.carts.concat(cartNew)
            });
            console.log(this.state.carts);
        }
    };
  
    handlePlus = (id) =>{
        const index = this.state.carts.findIndex((el) => {
            return el.id_menu === id;
        });
        let newCart = [...this.state.carts];
        newCart[index] = {
            ...newCart[index],
            quantity : this.state.carts[index].quantity + 1
        };
        this.setState({
            carts : newCart
        })


    }
    handleMinus = (id) =>{
        const index = this.state.carts.findIndex((el) => {
            return el.id_menu === id;
        });
        if(this.state.carts[index].quantity > 1){
               let newCart = [...this.state.carts];
        newCart[index] = {
            ...newCart[index],
            quantity : this.state.carts[index].quantity -1
        };
        this.setState({
            carts : newCart
        })

        }
     

    }

    handlecancelcart = () =>{
        this.setState({
            carts : []
        })
    }

    handleClickRightBar = () => {
        this.setState({
            RightBarDisplay: !this.state.RightBarDisplay
        });
    };

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-8 col-12">
                        <div className="row">
                            <Header
                                ifClickMenu={this.handleClickRightBar}
                                arrCart={this.state.carts} />
                        </div>
                        <div className="row">
                            <div className="main">
                                <LeftBar />
                                <FoodItem
                                    menus={this.state.menus}
                                    addCart={(id, name, price, img) =>
                                        this.addCart(id, name, price, img)}
                                />
                                <ModalAdd />
                                <ModalCheckout />
                            </div>
                        </div>
                    </div>
                    <RightBar displayed={this.state.RightBarDisplay}
                        ifClickMenu={this.handleClickRightBar}
                        arrCart={this.state.carts}
                        cancel ={this.handlecancelcart}
                        handlePlus={(id) => this.handlePlus(id)}
                        handleMinus={(id) => this.handleMinus(id)}

                    />
                </div>

            </>

        );
    }
}

export default Home;