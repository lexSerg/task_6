import { INC, ON_PRODUCTS_LOADED } from "../action-types";

const initialState = {
    products : [],
    cart : [],
    counter : 0,
    isCart : false
  };
  
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC : return {...state, counter : state.counter + 1};
        case ON_PRODUCTS_LOADED : {
          return {...state, products : action.payload};
        }
      default: return state
    }
  };