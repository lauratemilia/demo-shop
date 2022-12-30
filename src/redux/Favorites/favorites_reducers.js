import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from "./favorites_constants"


const initialState = {
    products: [],    
}
// only pure functions, so no async processing here
export function favoritesReducer(state = initialState, action){
    switch(action.type){
        case ADD_TO_FAVORITES:
            let productInFavorites = false;            
            if(!productInFavorites){
                return Object.assign({}, state, {
                    products: [
                        ...state.products,
                        {
                            ...action.payload.product,
                            favorites: true
                        }
                    ]
                })
            }
            else {
                return state;
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