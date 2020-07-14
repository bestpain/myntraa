import React from "react";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toggleDropDownVisibility } from "../../redux/cart/cart.actions";

const CartIcon = ({toggleDropDownVisibility}) => (
  <div className="cart-icon" onClick={toggleDropDownVisibility}>
    <ShoppingBag className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleDropDownVisibility: () => dispatch(toggleDropDownVisibility()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
