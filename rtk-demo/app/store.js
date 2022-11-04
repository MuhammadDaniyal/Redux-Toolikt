const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice')
const iceCreamReducer = require('../features/icecream/iceCreamSlice')

const store = configureStore({
    reducer: { // specify a key called reducer
        // in this specify all the reducers from slices that belong the features
        cake: cakeReducer,
        iceCream: iceCreamReducer,
    }
})

module.exports = store

// logger Middleware - insight info deta action dispatch which i see what redux toolkit does under the hood 