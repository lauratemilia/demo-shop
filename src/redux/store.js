import {configureStore} from "@reduxjs/toolkit"
import {cartReducer} from "./Cart/cart_reducers"


const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export default store;