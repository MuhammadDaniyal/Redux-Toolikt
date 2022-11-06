const { cakeActions } = require('../cake/cakeSlice')

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
    },
    // there are two ways to specify extraReducers

    // FIRST WAY:
    // specify mapping object where the key correspond to action type from a diff slice
    /*
    extraReducers: {
        // action name ['actionName'] => ['slice name / reducer name'] 
        ['cake/ordered']: (state, action) => { // for a func specify as a reducer function
            state.numOfIceCream--
        }
    }
    */

    // SECOND WAY
    // the recommended approch is to specify the same using build function
    extraReducers: (builder) => { // function recieve an arg which we can name as builder
        // add a new case - first arg is actionType - second arg is a func as a reducer function
        builder.addCase(cakeActions.ordered, (state, action) => {
            state.numOfIceCream-- // mutate the state
        })
    }

})

module.exports = iceCreamSlice.reducer // default export
module.exports.iceCreamActions = iceCreamSlice.actions // actions as a name export, cakeActions