import { INC, ON_PRODUCTS_LOADED, ON_ITEM_IN_CART_TOGGLE } from '../action-types'
export const incCounter = () => ({type : INC});
export const onProductsLoad = (payload) => ({type : ON_PRODUCTS_LOADED, payload});
export const onItemInCart = (payload) => ({type : ON_ITEM_IN_CART_TOGGLE, payload});
