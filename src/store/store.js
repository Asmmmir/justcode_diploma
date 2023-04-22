import { legacy_createStore as createStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

let store = createStore(reducer, []);

export default store;
