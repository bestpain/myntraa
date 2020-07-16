import React from "react";
import { selectShopCollectionsForPreview } from "../../redux/shop-data/shop-data.selectors";
import { connect } from "react-redux";
import PreviewCollection from "../../components/preview-collection/collection-preview.component";
import { createStructuredSelector } from "reselect";
import "./collection-overview.styles.scss";

const CollectionPreview = ({ shopItems }) => {
console.log(shopItems)
  return(
  <div className="collection-overview">
    {shopItems.map(({ id, ...remainingProps }) => (
      <PreviewCollection key={id} {...remainingProps} />
    ))}
  </div>
);
    }
const mapStateToProps = createStructuredSelector({
  shopItems: selectShopCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionPreview);
