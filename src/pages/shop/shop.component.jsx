import React from 'react';
import './shop.styles.scss'
import SHOP_DATA from './shop-data'
import PreviewCollection from '../../components/preview-collection/collection-preview.component'

class Shop extends React.Component{

    render(){
        return(
            <div className="shop">
                {SHOP_DATA.map(({id,...remainingProps})=><PreviewCollection key={id} {...remainingProps}/>)}
            </div>
        )
    }
}

export default Shop;