
import {ADD_TO_CART} from "./constants"

export function addToCart(payload){

    return {
        type: ADD_TO_CART,
        payload
    }

}