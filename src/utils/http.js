import Axios from 'axios';

export const getMenu = () => {
    return Axios.get(process.env.REACT_APP_GET_MENU);
};

export const searchMenu = (name, by) => {
    console.log(by);
    const url = `${process.env.REACT_APP_SEARCH}?name=${name}&by=${by}`;
    return Axios.get(url);
};

export const insertMenu = (name, picture, price, id_category) => {
    const data = {
        name: name,
        picture: picture,
        price: price,
        id_category: id_category
    };
    const url = process.env.REACT_APP_INSERT_MENU;

    return Axios.post(url, data, {
        headers: {
            'x-access-token': "bearer " + localStorage.getItem('token'),
            'Content-Type' : 'application/json' }
    });
}

export const addTrans = (invoice, cashier, orders, amount) => {
    const data = {
        invoice: invoice,
        cashier: cashier,
        orders: orders,
        amount: amount,
    };
    const url = process.env.REACT_APP_INSERT_TRANS;
    return Axios.post(url, data, {
        headers: {'x-access-token': "bearer " + localStorage.getItem('token')}
    });
};

export const getHistory = () => {
    const url = 'http://localhost:8000/history/getall';
    return Axios.get(url, {
        headers: {'x-access-token': "bearer " + localStorage.getItem('token')}
    });
};
