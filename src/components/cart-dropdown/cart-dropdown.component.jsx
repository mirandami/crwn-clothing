import React from "react";
import {connect} from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss'
import CartItem from "../cart-item/cart-item.component";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import { withRouter } from 'react-router-dom';
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))
                    :
                    <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() =>
        {history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
// all of our higher order components return components but also take components as arguments, withRouter is
// taking the component that got return from our connect call as its component argument, 简单来说withRouter的组件参数来自connect call返回的值
//参数的位置很重要，第一我们会先得到connect component，然后pass in to withRouter这样更高级的组件
