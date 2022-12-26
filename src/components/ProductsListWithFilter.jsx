import React from 'react';
import ProductItem from "./ProductItem";
import './ProductList.css';

function ProductsListWithFilter(props){
    console.log(props)
    return(
            <div className="row mb-4">
                {
                    props.content.map((category) => {
                        return category.items.map(
                            (item) => {
                                return <ProductItem 
                                    {...item}
                                    key = {item.id}
                                />
                            }
                        )
                    })
                }   
            </div>
    );
}

export default ProductsListWithFilter;