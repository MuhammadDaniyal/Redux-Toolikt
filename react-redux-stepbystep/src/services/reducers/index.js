import { combineReducers } from 'redux';
import { cartItems } from './reducer';

export const rootReducer = combineReducers({
    cartItems: cartItems
})