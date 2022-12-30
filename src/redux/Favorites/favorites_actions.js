
import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from "./favorites_constants"
import { createAction } from "@reduxjs/toolkit";

const addToFavorites = createAction(ADD_TO_FAVORITES);
const removeFromFavorites = createAction(REMOVE_FROM_FAVORITES);


export {addToFavorites, removeFromFavorites};