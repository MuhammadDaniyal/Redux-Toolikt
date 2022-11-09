// const createSlice = require('@reduxjs/toolkit').createSlice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfCakes: 20
}

// createSlice will automatically generate action creators with the same name as the reducer functions we have written

const cakeSlice = createSlice({
    // in this obj we specifi three property
    name: 'cake', // name of this slice  
    initialState, // initial state of this individual slice
    // specify reducer function, iit bit different with redux 
    reducers: {
        // specify individual state transition
        ordered: (state) => { // similar to case condition of redcuer function
            state.numOfCakes-- // we didnot return a new state and directly mutate the state
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    }
})

export default cakeSlice.reducer // default export
export const { ordered, restocked } = cakeSlice.actions // actions as a name export cakeActions