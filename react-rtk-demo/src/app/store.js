import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/icecream/iceCreamSlice'
import userReducer from '../features/user/userSlice'

const store = configureStore({
    reducer: { // specify a key called reducer
        // in this specify all the reducers from slices that belong the features
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    }
})

export default store

// logger Middleware - insight info deta action dispatch which i see what redux toolkit does under the hood 