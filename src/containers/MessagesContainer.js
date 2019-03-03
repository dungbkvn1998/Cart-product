import React, { Component } from 'react';
import Messages from "../components/Messages";
import { connect } from 'react-redux';

class CartContainer extends Component {
    render() {
        let { message } = this.props;
        return (
            <Messages message = {message}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        message: state.message
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
