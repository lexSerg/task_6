import { INC, ON_PRODUCTS_LOADED } from '../action-types'
export const incCounter = () => ({type : INC});
export const onProductsLoad = (payload) => ({type : ON_PRODUCTS_LOADED, payload});
