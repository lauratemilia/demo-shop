import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from "./favorites_constants"

const initialState = {
    products: [],    
}
// only pure functions, so no async processing here
export function favoritesReducer(state = initialState, action){    
    switch(action.type){
        case ADD_TO_FAVORITES:
            if(state.products.some( item => {
                const result = state.products.find(prod => prod.id === action.payload.product.id)
                return result ? true : false 
            })){
                return Object.assign({}, state, {
                    products: [
                        ...state.products
                    ]
                })
            } else {
                return Object.assign({}, state, {
                    products: [
                        ...state.products,
                        {
                            ...action.payload.product,
                        }
                    ]
                })
            }            
        case REMOVE_FROM_FAVORITES:
            const remainingProducts = state.products.filter(product => product.id !== action.payload.product.id)
            return Object.assign({}, state, {
                products: remainingProducts
            })
        default:
            return state;    
        }
}