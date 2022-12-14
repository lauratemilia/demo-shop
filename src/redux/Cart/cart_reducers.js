import {ADD_TO_CART, REMOVE_FROM_CART} from "./cart_constants"


const initialState = {
    products: [],    
}
// only pure functions, so no async processing here
export function cartReducer(state = initialState, action){
    switch(action.type){
        case ADD_TO_CART:
            let productInCart = false;
            const updatedProducts = state.products.map(product => {
                if(product.id === action.payload.product.id) {
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
        case REMOVE_FROM_CART:
            const remainingProducts = state.products.filter(product => product.id !== action.payload.product.id)
            return Object.assign({}, state, {
                products: remainingProducts
            })
        default:
            return state;    
        }
}