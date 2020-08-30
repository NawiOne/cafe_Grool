import {getMenu, searchMenu, addTrans, getHistory, insertMenu} from '../../utils/http';
import {
    getMenuAction,
    searchMenuAction,
    addCartAction,
    plusQuantityAction,
    minQuantityAction,
    cancelCartAction,
    addTransAction,
    getHistoryAction,
    insertMenuAction
} from './actionTypes';

export const getMenuCreator = () => {
    return {
        type: getMenuAction,
        payload: getMenu()
    };
};

export const searchMenuCreator = (name, by) => {
    console.log(name, by);
    return {
        type: searchMenuAction,
        payload: searchMenu(name, by)
    };
};
export const insertMenuCreator = (name, picture, price, id_category) => {
    console.log(name);
    return {
        type: insertMenuAction,
        payload: insertMenu(name, picture, price, id_category)
    };
};

export const addCartCreator = (id, name, price, img) => {
    return {
        type: addCartAction,
        payload: {
            id_menu: id,
            name: name,
            quantity: 1,
            price: price,
            picture: img,
        }
    };
};

export const plusQuantityCreator = (id) => {
    return {
        type: plusQuantityAction,
        payload: {
            id_menu: id,
        }
    };
};
export const minQuantityCreator = (id) => {
    return {
        type: minQuantityAction,
        payload: {
            id_menu: id,
        }
    };
};
export const cancelCartCreator = () => {
    return {
        type: cancelCartAction,
        payload: null
    };
};

export const addTransactionCreator = (invoice, cashier, orders, amount) => {
    return {
        type: addTransAction,
        payload: addTrans(invoice, cashier, orders, amount)
    };
};

export const getHistoryCreator = () => {
    return {
        type: getHistoryAction,
        payload: getHistory()
    };
};








