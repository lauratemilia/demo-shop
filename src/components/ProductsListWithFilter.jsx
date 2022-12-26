import React from 'react';
import ProductItem from "./ProductItem";
import './ProductList.css';

function ProductsListWithFilter(props){
    return(
            <div className="row mb-4">
                {
                    props.content.flatMap(category => category.items)
                        .map(item => <ProductItem {...item} key = {item.id} />)
                }   
            </div>
    );
}

export default ProductsListWithFilter;