import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from "./favorites_constants"

const initialState = {
    products: [],    
}
// only pure functions, so no async processing here
export function favoritesReducer(state = initialState, action){    
    switch(action.type){
        case ADD_TO_FAVORITES:
            console.log("add to favorites: " + {...state.products})
            if(state.products.some( item => {
                const result = state.products.find(prod => prod.id === action.payload.product.id)
                return result ? true : false 
            })){
                console.log("already in favorites")

                return Object.assign({}, state, {
                    products: [
                        ...state.products
                    ]
                })
            } else {
                console.log("adding now to favorites")

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
            console.log("remove from favorites")
            const remainingProducts = state.products.filter(product => product.id !== action.payload.product.id)
            return Object.assign({}, state, {
                products: remainingProducts
            })
        default:
            return state;    
        }
}