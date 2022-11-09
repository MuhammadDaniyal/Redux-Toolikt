import { ADD_TO_CART, REMOVE_TO_CART } from "../constant";

export const addToCart = (data) => {
    // console.log(data);
    return {
        type: ADD_TO_CART,
        payload: data
    }
}
export const removeToCart = () => {
    return {
        type: REMOVE_TO_CART,
    }
}