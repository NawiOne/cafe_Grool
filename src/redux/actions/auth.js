import {logoutAction, loginAction, registerAction, clearStatusAction} from '../actions/actionTypes';
import {login, register} from '../../utils/http'

export const logoutCreator = () =>{
    return{
        type: logoutAction,
        payload : null
    }
}
export const loginCreator = (username, password) => {
    return {
        type: loginAction,
        payload: login(username, password)
    }
}

export const registerCreator = (username, password) => {
    return {
        type: registerAction,
        payload: register(username, password)
    }
}
export const clearStatusCreator = () => {
    return {
        type: clearStatusAction,
    }
}