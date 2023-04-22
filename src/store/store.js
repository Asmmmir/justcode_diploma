import { legacy_createStore as createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.products,
      };
      case 'ADD_PRODUCT_TO_CART': {
        return {
          ...state,
          cart: state.cart ? [...state.cart, action.id] : [action.id]
        }
      }
    default:
      return state;
  }
};

export const addToCart = (id) => ({
  type: 'ADD_PRODUCT_TO_CART',
  id

})

let store = createStore(reducer, [], devToolsEnhancer());

export default store;
