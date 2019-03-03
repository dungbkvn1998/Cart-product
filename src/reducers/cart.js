import * as types from '../constants/ActionTypes';

let data = JSON.parse(localStorage.getItem("cart"));

let initialState = data ? data : [];

const cart = (state = initialState, action) => {
    let { product, quantity } = action;
    let index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findProductIndex(state, product);
            if (index !== -1) {
                if (state[index].quantity < product.inventory) { 
                    state[index].quantity += quantity; 
                }
            } else {
                state.push({
                    product, quantity
                })
            }
            localStorage.setItem("cart", JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}

let findProductIndex = (cart, product) => {
    let index = -1;
    if (cart) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
            }

        }
    }
    return index;
}

export default cart;