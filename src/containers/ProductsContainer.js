import React, { Component } from 'react';
import Products from "../components/Products";
import { connect } from 'react-redux';
import ProductItem from "../components/ProductItem";
import * as actions from "../actions";

class ProductsContainer extends Component {
    render() {
        let { products } = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }
    showProducts(products) {
        let result;
        let { onAddToCart, onChangeMessage } = this.props
        if (products) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        product={product}
                        key={index}
                        onAddToCart={onAddToCart}
                        onChangeMessage={onChangeMessage}
                    />
                )
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: product => {
            dispatch(actions.actAddToCart(product, 1));
        },
        onChangeMessage: message => {
            dispatch(actions.actChangeMessage(message));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
