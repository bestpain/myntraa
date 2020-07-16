import React from "react";
import "./category.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { selectCategoryCollections } from "../../redux/shop-data/shop-data.selectors";

const Category = ({ categoryCollections }) => {
const {title,items}=categoryCollections;
  return (
    <div className="category-page">
      <h2 className="title">{title}</h2>
      <div className="items">
          {items.map(item=><CollectionItem key={item.id} item={item}/>)}
      </div>
    </div>
  );
};

const mapStateToProps = (state, { match: { params } }) => ({
  categoryCollections: selectCategoryCollections(params.category)(state),
});

export default connect(mapStateToProps)(Category);
