import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

function CollectionItem({ name, imageUrl, price }) {
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
      <CustomButton inverted>ADD TO CART</CustomButton>
    </div>
  );
}

export default CollectionItem;
