import { addProduct } from "../reducer-func/addProduct";
import { decrement, increment } from "../reducer-func/quantityAmount";

const products = (state = [], action) => {
    switch (action.type) {
      case "SET_PRODUCTS":
        return {
          ...state,
          products: action.products,
        
        };
        case 'ADD_PRODUCT_TO_CART': {
          return {
            ...state,
            cart: state.cart ?  addProduct(state.cart, action.id,action.price) : [{id:action.id, quantity:1, price:action.price}],
          }
        }
        case 'INCREMENT_PRODUCT_QUANTITY': {
          return {
            ...state,
            cart: increment(state.cart,action.id)
          }
        }
        case 'DECREMENT_PRODUCT_QUANTITY': {
          return {
            ...state,
            cart: decrement(state.cart,action.id)
          }
        }
      default:
        return state;
    }
  };
  export default products



  