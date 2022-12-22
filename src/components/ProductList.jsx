import React from 'react';
import ProductItem from "./ProductItem";
import './ProductList.css';


function ProductList(props){

    const { items } = props;   
   
    return(
            <div className="row mb-4">
                {
                    items.map((item) => {
                        return <ProductItem 
                            {...item}
                            key = {item.id}
                        />
                    })
                }   
            </div>
    );
}

export default ProductList;