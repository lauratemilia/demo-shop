
import {ADD_TO_CART} from "./constants"

export function addToCart(payload){
    console.log("payload" + payload)
    return {
        type: ADD_TO_CART,
        payload
    }

}