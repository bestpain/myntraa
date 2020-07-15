import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import {withRouter} from 'react-router-dom'

const CartDropDown = ({ cartItems,history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={()=>history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });

export default withRouter(connect(mapStateToProps)(CartDropDown));
