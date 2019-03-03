import React, { Component } from 'react';
import * as mes from '../constants/Messages';

class ProductItem extends Component {
    showRating(rating) {
        let result = [];
        for (let index = 1; index <= rating; index++) {
            result.push(<i className="fa fa-star" key={index}></i>);
        }
        for (let index = rating + 1; index <= 5; index++) {
            result.push(<i className="fa fa-star-o" key={index}></i>);
        }
        return result;
    }
    render() {
        let { product } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.img}
                            className="img-fluid" alt={product.name} width={400} />

                        <div className="mask waves-light waves-effect waves-light"></div>

                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                            <a href='/'>{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                {this.showRating(product.rating)}
                            </li>
                        </ul>
                        <p className="card-text">
                            {product.des}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <div 
                                    className="btn-floating blue-gradient" 
                                    data-toggle="tooltip" data-placement="top" 
                                    title="" 
                                    data-original-title="Add to Cart"
                                    onClick = {() => this.onAddToCart(product,mes.MSG_ADD_TO_CART_SUCCESS)}
                                >
                                    <i className="fa fa-shopping-cart" />
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    onAddToCart = (product,message) => {
        this.props.onAddToCart(product);
        //this.props.onChangeMessage(message);
    }


}



export default ProductItem;
