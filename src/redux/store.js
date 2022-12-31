import {configureStore} from "@reduxjs/toolkit"
import {cartReducer} from "./Cart/cart_reducers"
import { favoritesReducer } from "./Favorites/favorites_reducers";


const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorites: favoritesReducer
    }
})

export default store;