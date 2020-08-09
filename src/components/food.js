import React from "react";
import Axios from "axios";
const Thick = require('../img/thick-figma.png');
// const Fork = require('../img/fork.png');

class Food extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            click : false
        }
    }

    handleClick = () =>{
        this.setState({
            click : !this.state.click
        })
    }

componentDidUpdate(){
    this.props.getMenu()
}

    cartChecked = (id_menu, total) => {
        const queryGetId = `http://localhost:8000/cart/getbyid/${id_menu}`;
        Axios.get(queryGetId).then((res) => {
            const data = res.data.data;
            if(!data.length) {
                this.addCart(id_menu, total);
            } else {
                this.delCart(id_menu);
            }
        });
    };
    delCart = (id) => {
        const queryDel = `http://localhost:8000/cart/delete/${id}`;
        Axios.delete(queryDel).then(() => {
            this.props.getCart();
        });
    };
    addCart = (id_menu, total) => {
        const queryAdd = "http://localhost:8000/cart/insertcart";
        Axios.post(queryAdd, {
            id_menu: id_menu,
            quantity: 1,
            total: total,
        }).then(() => {
            console.log(this.props)
            this.props.getCart();
        });
    };
    render() {
        return (
            <>
                {this.props.menus.map((menu) => {
                    return (
                        <div className="col-12 col-sm-6 col-lg-4 food">
                            <div className="card bg-transparent">
                                <div className="image-card">
                                    <img src={menu.picture} className="card-img-top" alt=" food"
                                        onClick={() => {
                                            this.cartChecked(menu.id_menu, menu.price);
                                        }}
                                    />
                                    <div className="checklist">
                                        <img src={Thick} />
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
            </>
        );
    }
}



export default Food;