import * as types from '../constants/ActionTypes';

export const actAddToCart = (product,quantity) => {
    return {
        type : types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type : types.ADD_TO_CART,
        message
    }
}