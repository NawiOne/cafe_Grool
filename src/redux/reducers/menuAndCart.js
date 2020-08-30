import {
    searchMenuAction,
    getMenuAction,
    pending,
    fulfilled,
    rejected,
    addCartAction,
    plusQuantityAction,
    minQuantityAction,
    cancelCartAction,
    addTransAction,
    getHistoryAction,
    insertMenuAction,
} from '../actions/actionTypes';

const initalstate = {
    data: [],
    cart: [],
    insertStatus: [],
    history: [],
    error: '',
    isPending: false,
    isfulfilled: false,
    isRejected: false,
};


const menuAndCart = (prevState = initalstate, {type, payload}) => {
    switch(type) {
        // get menu
        case getMenuAction + pending:
            return {
                ...prevState,
                isPending: true
            };
        case getMenuAction + rejected:
            return {
                ...prevState,
                isRejected: true,
                error: payload,
                isPending: false
            };
        case getMenuAction + fulfilled:
            return {
                ...prevState,
                isfulfilled: true,
                data: payload.data.data,
                isPending: false,
            };
        // search menu
        case searchMenuAction + pending:
            return {
                ...prevState,
                isPending: true
            };

        case searchMenuAction + rejected:
            return {
                ...prevState,
                isRejected: true,
                error: payload,
                isPending: false
            };
        case searchMenuAction + fulfilled:

            return {
                ...prevState,
                isfulfilled: true,
                data: payload.data.data,
                isPending: false,
            };
        case insertMenuAction + pending:
            return {
                ...prevState,
                isPending: true,
            };
        case insertMenuAction + rejected:
            return {
                ...prevState,
                insertStatus: payload,
                isRejected: true,
                isPending: false,
            };
        case insertMenuAction + fulfilled:
            return {
                ...prevState,
                isfulfilled: true,
                insertStatus: payload,
                isPending: false,
            };

        // CART
        case addCartAction:
            const index = prevState.cart.findIndex((el) => {
                return payload.id_menu === el.id_menu;
            });
            if(index >= 0) {
                prevState.cart.splice(index, 1);
                return {
                    ...prevState,
                    cart: prevState.cart
                };
            } else {
                return {
                    ...prevState,
                    cart: prevState.cart.concat(payload)
                };
            };
        case plusQuantityAction:
            const plusQuantity = prevState.cart.findIndex((el) => {
                return payload.id_menu === el.id_menu;
            });
            let newCartPlus = [...prevState.cart];
            newCartPlus[plusQuantity] = {
                ...newCartPlus[plusQuantity],
                quantity: prevState.cart[plusQuantity].quantity + 1
            };
            return {
                ...prevState,
                cart: newCartPlus
            };
        case minQuantityAction:
            const minQuantity = prevState.cart.findIndex((el) => {
                return payload.id_menu === el.id_menu;
            });
            let newCartMin = [...prevState.cart];
            newCartMin[minQuantity] = {
                ...newCartMin[minQuantity],
                quantity: prevState.cart[minQuantity].quantity - 1
            };
            if(newCartMin[minQuantity].quantity === 0) {
                prevState.cart.splice(minQuantity, 1);
                return {
                    ...prevState,
                    cart: prevState.cart
                };
            } else {
                return {
                    ...prevState,
                    cart: newCartMin
                };
            }

        case cancelCartAction:
            return {
                ...prevState,
                cart: []
            };
        case addTransAction + pending:
            return {
                ...prevState,
                isPending: true
            };
        case addTransAction + rejected:
            return {
                ...prevState,
                isRejected: true,
                error: payload,
                isPending: false
            };
        case addTransAction + fulfilled:
            return {
                ...prevState,
                error: payload,
                isfulfilled: true,
                isPending: false
            };
        case getHistoryAction + rejected:
            return {
                ...prevState,
                history: payload.data.data,
                isRejected: payload,
                isPending: false
            };
        case getHistoryAction + fulfilled:
            return {
                ...prevState,
                history: payload.data.data,
                isfulfilled: true,
                isPending: false
            };

        default:
            return prevState;
    }

};
export default menuAndCart;