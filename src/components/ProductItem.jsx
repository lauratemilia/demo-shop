import React from 'react';
import ProductList from './ProductList';
import './ProductItem.css';

function ProductsItem(props){

    const {name, price, image, currency, duration, offeredBy, description, skills} = props;

    return (
        <div className="product-item col-4 d-flex flex-column align-items-center">
            <img src={image} alt="productPhoto" className="mb-2"/>
            <div id="title">
                <h5 className="mb-1">{ name }</h5>
            </div>
            <div id="details"> 
                <div id="skills"><span className="mb-3">Skills you'll gain:</span><p>{skills}</p></div>
                <div id="price"><p>{ price + currency }</p></div>
            </div>
           
        </div>
    );

}

export default ProductsItem;