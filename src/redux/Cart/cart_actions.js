
import {ADD_TO_CART, REMOVE_FROM_CART} from "./cart_constants"

function addToCart(payload){
    return {
        type: ADD_TO_CART,
        payload
    }

}

function removeFromCart(payload){
    return {
        type: REMOVE_FROM_CART,
        payload
    }
}

export {addToCart, removeFromCart};