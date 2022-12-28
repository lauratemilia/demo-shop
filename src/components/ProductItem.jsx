import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import {addToCart} from "./../redux/actions/cart"

function ProductsItem(props){

    const {id, name, price, image, currency, duration, offeredBy, description, skills} = props;

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
            <button className = "btn btn-outline-dark"
                onClick = {() => props.addToCart({
                    product: {
                        id, name, price, currency, image, duration, offeredBy, description, skills
                    }
                })}
                >
                Adauga <span><img src="https://img.icons8.com/emoji/24/null/shopping-cart-emoji.png" alt = ""/></span>
            </button>
           
        </div>
    );

}

function mapDispatchToProps(dispatch){
    return {
        addToCart: (payoad) => dispatch(addToCart(payoad))
    }
}

export default connect(null, mapDispatchToProps)(ProductsItem);