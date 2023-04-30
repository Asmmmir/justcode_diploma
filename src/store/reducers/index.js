import { combineReducers } from "redux";
import products from "./cart-reducer";
import userReducer from "./user-reducer";


export const rootReducer = combineReducers({products,userReducer})

