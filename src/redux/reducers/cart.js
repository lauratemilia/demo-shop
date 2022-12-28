import { mergeInitialValuesWithDefaultValues } from "react-admin";
import {ADD_TO_CART} from "./../actions/constants"


const initialState = {
    products: []
}
// only pure functions, so no async processing here
export function cartReducer(state = mergeInitialValuesWithDefaultValues, action){
    console.log("reducer state before: " + state)
    switch(action.type){
        case ADD_TO_CART:
            let productInCart = false;
            const updatedProducts = state.products.map(product => {
                if(productInCart.id === action.payload.product.id) {
                    productInCart = true;
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                }
                else {
                    return product;
                }
            })
            if(!productInCart){
                return Object.assign({}, state, {
                    products: [
                        ...state.products,
                        {
                            ...action.payload.product,
                            quantity: 1
                        }
                    ]
                })
            }
            else {
                return Object.assign({}, state, {
                    products: updatedProducts
                })
            }    
        default:
            return state;    
        }
}