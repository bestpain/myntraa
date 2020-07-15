import React from "react";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toggleDropDownVisibility } from "../../redux/cart/cart.actions";
import {countCartItemsSelector} from '../../redux/cart/cart.selectors'

const CartIcon = ({ toggleDropDownVisibility, totalCartItems }) => (
  <div className="cart-icon" onClick={toggleDropDownVisibility}>
    <ShoppingBag className="shopping-icon" />
    <span className="item-count">{totalCartItems}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleDropDownVisibility: () => dispatch(toggleDropDownVisibility()),
});

//!without using selectors and memoizaation
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   totalCartItems: cartItems.reduce(
//     (totalItemsAccumulator, item) => totalItemsAccumulator + item.quantity,
//     0
//   ),
// });

//!using selectors and memoization
const mapStateToProps = state => ({
  totalCartItems: countCartItemsSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

// So we are actually not trying to return a new object as the value of item in your example, 
//we are trying to return a new value for that prop!
// While it's true that every connected component's mapStateToProps does get called on every action fired, 
//connect actually does a shallow comparison for us as so if the value of our prop being passed into our component from mapStateToProps has not changed, 
//it won't pass anything new to our component which won't cause it to needlessly re-render. 
//What reselect does is it allows us to memoize complex calculations in our selectors, 
//meaning that if we were trying to pass a prop into our component that needs some complex logic using different values on our redux state,
// unless those input values change it won't recompute the value! I hope that makes sense :)
