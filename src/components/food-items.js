import React from "react";

const Thick = require('../img/thick-figma.png');

const FoodItem = (props) => {
    if(props.menus.length) {
        return (
            <>
                <div className="items">
                    <div className="row">
                        {
                            props.menus.map((menu) => {
                                return (
                                    <div className="col-12 col-sm-6 col-lg-4 food" key={menu.id_menu}>
                                        <div className="card bg-transparent">
                                            <div className="image-card">
                                                <img src={menu.picture} className="img-card" alt=" food"
                                                    onClick={() =>
                                                        props.addCart(
                                                            menu.id_menu,
                                                            menu.name,
                                                            menu.price,
                                                            menu.picture)}
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


};


export default FoodItem;