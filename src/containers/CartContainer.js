import React, { Component } from 'react';
import Cart from "../components/Cart";
import { connect } from 'react-redux';
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";

class CartContainer extends Component {
    render() {
        let { cart } = this.props;
        return (
            <Cart>
                {this.showCart(cart)}
            </Cart>
        );
    }
    showCart(cart) {
        let result = <tr><td>Giỏ hàng trống</td></tr>;
        let subtotal = 0;
        if (cart.length > 0 ) {
            result = cart.map((cartItem, index) => {
                subtotal += (cartItem.product.price*cartItem.quantity)
                return (
                    <CartItem item={cartItem} key={index} />
                )
            })
            result.push(<CartResult key={-1} subtotal={subtotal} />)
        }   
        return result;
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
