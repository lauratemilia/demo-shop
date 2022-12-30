
import {ADD_TO_CART, REMOVE_FROM_CART} from "./cart_constants"
import { createAction } from "@reduxjs/toolkit";

const addToCart = createAction(ADD_TO_CART);
const removeFromCart = createAction(REMOVE_FROM_CART);


export {addToCart, removeFromCart};