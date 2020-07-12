import React from 'react';
import './shop.styles.scss'
import SHOP_DATA from './shop-data'
import PreviewCollection from '../../components/preview-collection/collection-preview.component'

class Shop extends React.Component{
    constructor(props){
        super(props)
        this.state={SHOP_DATA};
    }
    render(){
        const {SHOP_DATA}=this.state;
        return(
            <div className="shop">
                {SHOP_DATA.map(({id,...remainingProps})=><PreviewCollection key={id} {...remainingProps}/>)}
            </div>
        )
    }
}

export default Shop;