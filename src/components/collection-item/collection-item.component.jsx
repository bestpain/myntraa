import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { addItemToCart } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

function CollectionItem({ item, addItemToCart }) {
  const {  name, imageUrl, price } = item;

  return (
    <div className="collection-item">
      <div
        className="item-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="about-item">
        <span className="name">{name}</span>
        <span>{price}</span>
      </div>
      <CustomButton onClick={() => addItemToCart(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
