import { INC, ON_PRODUCTS_LOADED, ON_ITEM_IN_CART_TOGGLE } from "../action-types";

const initialState = {
    products : [],
    cart : [],
    counter : 0,
    isCart : false
  };
  
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC : return {...state, counter : state.counter + 1};
        case ON_PRODUCTS_LOADED : 
          return {...state, products : action.payload};
        case ON_ITEM_IN_CART_TOGGLE : {
          const updatedCart = state.cart.filter(value => value.id !== action.payload.id);
          if (updatedCart.length === state.cart.length) {
            updatedCart.push(action.payload)
          }
          return {...state, cart : updatedCart};
        }
      default: return state
    }
  };