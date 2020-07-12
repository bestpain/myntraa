import React from 'react';
import './collection-item.styles.scss';

function CollectionItem({name,imageUrl,price}){
    return(
        <div className="collection-item">
            <div className="item-image" style={{backgroundImage:`url(${imageUrl})`}}>
                <div className="add-to-cart">
                    <button>ADD TO CART</button>
                </div>
            </div>
            <div className="about-item">
                <span className="name">{name}</span>
                <span>{price}</span>
            </div>
        </div>
    )
}

export default CollectionItem;