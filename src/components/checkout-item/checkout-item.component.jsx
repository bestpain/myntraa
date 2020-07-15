import React from "react";

import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  addItemToCart,
  removeItemByOne
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({
  cartItem: { id, name, imageUrl, price, quantity },
  removeItemByOne,
  removeItemFromCart,
  addItem,
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => removeItemByOne(id, quantity)}>
        &#10094;
      </div>
      <span className="value">{quantity}</span>
      <div
        className="arrow"
        onClick={() => addItem({ id, name, imageUrl, price, quantity })}
      >
        &#10095;
      </div>
    </span>{" "}
    <span className="price">{price}</span>
    <div className="remove-button" onClick={() => removeItemFromCart(id)}>
      &#10005;
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (itemId) => dispatch(removeItemFromCart(itemId)),
  addItem: (item) => dispatch(addItemToCart(item)),
  removeItemByOne:(itemId,quantity)=>dispatch(removeItemByOne(itemId,quantity))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
