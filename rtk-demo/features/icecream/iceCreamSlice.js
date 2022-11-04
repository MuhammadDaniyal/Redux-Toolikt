const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIceCream: 10
}

// createSlice will automatically generate action creators with the same name as the reducer functions we have written

const iceCreamSlice = createSlice({
    // in this obj we specify three property
    name: 'iceCream', // name of this slice  
    initialState, // initial state of this individual slice
    // specify reducer function, it bit different with plain redux 
    reducers: {
        // specify individual state transition
        ordered: (state) => { // similar to case condition of redcuer function
            state.numOfIceCream-- // we didnot return a new state and directly mutate the state
        },
        restocked: (state, action) => {
            state.numOfIceCream += action.payload
        }
    }
})

module.exports = iceCreamSlice.reducer // default export
module.exports.iceCreamActions = iceCreamSlice.actions // actions as a name export, cakeActions