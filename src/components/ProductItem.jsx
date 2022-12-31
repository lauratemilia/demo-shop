import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import {addToCart} from "../redux/Cart/cart_actions"
import {removeFromFavorites, addToFavorites} from "../redux/Favorites/favorites_actions"
import unfavoriteProduct from '../assets/icons/red_hollow.png';
import favoriteProduct from '../assets/icons/red_filled.png';




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
           <div>
           <button className = "btn btn-outline-dark"
                onClick = {() => props.addToCart({
                    product: {
                        id, name, price, currency, image, duration, offeredBy, description, skills
                    }
                })}
                >
                Adauga <span><img src="https://img.icons8.com/emoji/24/null/shopping-cart-emoji.png" alt = ""/></span>
            </button>

            <button id = "addToFavorites" className="btn"
                    onClick = {() => props.addToFavorites({
                    product: {
                        id, name, price, currency, image, duration, offeredBy, description, skills
                    }
                })}><img src = {unfavoriteProduct} alt="" width = "28" height="31" /></button>

             <button id = "removeFromFavorites" className="btn"
                    onClick = {() => props.removeFromFavorites({
                        product: {
                            id, name, price, currency, image, duration, offeredBy, description, skills
                        }
                    })}><img src = {favoriteProduct} alt="" width = "28" height="31" /></button>
            {/* {

                //TODO: fix the toggle
              props.favorites.forEach(fav => {
                        if(props.id === fav.id){
                            document.querySelector("#removeFromFavorites").classList.remove("hidden");
                            document.querySelector("#addToFavorites").classList.add("hidden");
                        } else {
                            document.querySelector("#removeFromFavorites").classList.add("hidden");
                            document.querySelector("#addToFavorites").classList.remove("hidden");
                        }})
            } */}

           </div>
           
        </div>
    );

}

function mapStateToProps(state) {
    return {
        favorites: state.favorites.products
    };
}

function mapDispatchToProps(dispatch){
    return {
        addToCart: (payoad) => dispatch(addToCart(payoad)),
        removeFromFavorites: (payoad) => dispatch(removeFromFavorites(payoad)),
        addToFavorites: (payoad) => dispatch(addToFavorites(payoad))

        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsItem);