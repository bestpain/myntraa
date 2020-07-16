import React from "react";
import "./shop.styles.scss";
import CollectionPreview from "../../components/collection-overview/collection-overview.component";
import { Route, Switch } from "react-router-dom";
import Category from "../category/category.component";

const Shop = ({match}) => (
  <div className="shop-page">
    <Route exact path={`${match.path}/:category`} component={Category} />
    <Route exact path={`${match.path}`} component={CollectionPreview} />
  </div>
);

export default Shop;
