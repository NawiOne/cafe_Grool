import React from "react";
// required Component
import Header from "../components/header";
import LeftBar from "../components/leftBar";
import FoodItem from "../components/food-items";
import RightBar from "../components/RightBar";
import ModalAdd from "../components/modalAdd";
import ModalCheckout from "../components/modalCheckout";
import ModalSearch from "../components/modalSearch";
// Axios
import Axios from 'axios';

class Home extends React.Component {
    state = {
        RightBarDisplay: false,
        leftBarDisplay: false,
        carts: [],
        menus: [],
    };

    getAllMenu = () => {
        const query = process.env.REACT_APP_GET_MENU;
        Axios.get(query).then((res) => {

            this.setState({
                menus: res.data.data
            });
            console.log(this.state.menus);
        }).catch((err) => {
            console.log(err);
        });
    };

    handleInput = (res) => {
        this.setState({
            result: res
        });
    };

   searchMenu = (name,by) =>{
       const url = `${process.env.REACT_APP_SEARCH}?name=${name}&by=${by}`;
       Axios.get(url)
       .then((res) =>{
           this.setState({
               menus : res.data.data
           })
       })
       .catch((err) =>{
           console.log(err)
       })
   }
        

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
                picture: img,
            };
            this.setState({
                carts: this.state.carts.concat(cartNew)
            });
            console.log(this.state.carts);
        }
    };

    handlePlus = (id) => {
        const index = this.state.carts.findIndex((el) => {
            return el.id_menu === id;
        });
        let newCart = [...this.state.carts];
        newCart[index] = {
            ...newCart[index],
            quantity: this.state.carts[index].quantity + 1
        };
        this.setState({
            carts: newCart
        });
    };
    handleMinus = (id) => {
        const index = this.state.carts.findIndex((el) => {
            return el.id_menu === id;
        });
        if(this.state.carts[index].quantity > 1) {
            let newCart = [...this.state.carts];
            newCart[index] = {
                ...newCart[index],
                quantity: this.state.carts[index].quantity - 1
            };
            this.setState({
                carts: newCart
            });
        }
    };

    handlecancelcart = () => {
        this.setState({
            carts: []
        });
    };
    handleClickLeftBar = () => {
        this.setState({
            leftBarDisplay: !this.state.leftBarDisplay
        });
    };

    handleClickRightBar = () => {
        this.setState({
            RightBarDisplay: !this.state.RightBarDisplay
        });
    };
    componentDidMount = () => {
        this.getAllMenu();

    };
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-8 col-12">
                        <div className="row">
                            <Header
                                ifClickMenu={this.handleClickRightBar}
                                arrCart={this.state.carts}
                                ifClickHumbMenu={this.handleClickLeftBar}
                                getAllMenu={this.getAllMenu} />
                        </div>
                        <div className="row">
                            <div className="main">
                                <LeftBar
                                    displayed={this.state.leftBarDisplay}
                                />
                                <FoodItem
                                    menus={this.state.menus}
                                    addCart={(id, name, price, img) =>
                                        this.addCart(id, name, price, img)}
                                    arrCart={this.state.carts}
                                />
                                <ModalAdd />
                                <ModalCheckout
                                    arrCart={this.state.carts} />
                                <ModalSearch
                                    Search={(res) => this.handleInput(res)}
                                    searchMenu={(name,by) => this.searchMenu(name,by)}
                                    
                                />
                            </div>
                        </div>
                    </div>
                    <RightBar
                        displayed={this.state.RightBarDisplay}
                        ifClickMenu={this.handleClickRightBar}
                        arrCart={this.state.carts}
                        cancel={this.handlecancelcart}
                        handlePlus={(id) => this.handlePlus(id)}
                        handleMinus={(id) => this.handleMinus(id)}

                    />
                </div>

            </>

        );
    }
}

export default Home;