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
            cart: state.cart ? [...state.cart, action.id] : [action.id],
            prices: state.prices ? [...state.prices,action.prices] : [action.prices]
          }
        }
      default:
        return state;
    }
  };
  export default products
  