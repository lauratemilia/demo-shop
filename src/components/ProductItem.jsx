import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import {addToCart} from "../redux/Cart/cart_actions"
import {removeFromFavorites, addToFavorites} from "../redux/Favorites/favorites_actions"



function ProductsItem(props){

    const {id, name, price, image, currency, duration, offeredBy, description, skills} = props;
    let isFavorite = {
        items: []
    };

    const addToFavorites = () => {
        props.addToFavorites({
            product: {
                id, name, price, currency, image, duration, offeredBy, description, skills
            }
        })
    }

    const removeFromFavorites = () => {
        props.removeFromFavorites({
            product: {
                id, name, price, currency, image, duration, offeredBy, description, skills
            }
        })
    }

    const checkIfFavorite = (event, id) => {
        return event.target.classList.contains("add-to-favorites-active");
    }

    const toggleFavorites = (event, id) => {
        event.preventDefault();

        const isFavorite = checkIfFavorite(event, id);
        if(isFavorite){
            document.querySelector("#product-" + id + " .addToFavorites span img").classList.remove("add-to-favorites-active");
            removeFromFavorites();
        } else {
            document.querySelector("#product-" + id + " .addToFavorites span img").classList.add("add-to-favorites-active");
            addToFavorites();
        }
    }

    const chechkIfIsFavorite = (e) => {

        if(window.location.href.includes("favorites") && !e.target.classList.contains("add-to-favorites-active")
        ){            
            document.querySelector("#product-" + id + " .addToFavorites span img").classList.add("add-to-favorites-active");
        } 
        else if(window.location.href.includes("all")){
            props.favorites.forEach(item => {
                document.querySelector("#product-" + item.id + " .addToFavorites span img").classList.add("add-to-favorites-active");
            }) 
            
        }
    }

    return (
        <div id={"product-".concat(props.id)} className="product-item col-4 d-flex flex-column align-items-center" onLoad={(e) => chechkIfIsFavorite(e)}>
            <img src={image} alt="productPhoto" className="mb-2"/>
            <div className="title">
                <h5 className="mb-1">{ name }</h5>
            </div>
            <div className="details"> 
                <div className="skills"><span className="mb-3">Skills you'll gain:</span><p>{skills}</p></div>
                <div className="price"><p>{ price + currency }</p></div>
            </div>
           <div>
           <button className = "cart btn btn-outline-dark"
                onClick = {() => props.addToCart({
                    product: {
                        id, name, price, currency, image, duration, offeredBy, description, skills
                    }
                })}
                >
                Adauga <span><img src="https://img.icons8.com/emoji/24/null/shopping-cart-emoji.png" alt = ""/></span>
            </button>

            <button className="addToFavorites btn btn-outline-dark" 
                onClick={(event) => {toggleFavorites(event, props.id)}}>
                    <span><img alt="" width="26" height="31"/></span>
            </button>
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