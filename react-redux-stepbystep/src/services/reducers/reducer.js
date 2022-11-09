import { ADD_TO_CART, REMOVE_TO_CART } from "../constant";

const initialState = [

]

// reducer means operation horha state py

export const cartItems = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // console.log('reducer:', action);
            return [
                ...state,
                {
                    id: new Date().toString(),
                    cardData: action.payload
                }
            ]

        case REMOVE_TO_CART:
            state.pop()
            return [
                ...state,
                // cardData: state.cardData.pop()
            ]

        default:
            return state
    }
}