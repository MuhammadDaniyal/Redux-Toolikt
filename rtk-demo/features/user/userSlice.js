const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')

const initialState = {
    loading: false,
    users: [],
    error: ''
}

// reduxtoolkit provide createAsyncThunk function to implement the creation & dispatching of async actions

// it accept two parameter - first is action name (action type) - 2nd is callback function that create payload
// special functionality: it will automatically dispatch lifecycle actions on the returned promise
// Generates pending, fulfilled and rejected action types - or yeh action types extraReducers ma hi kaam krengi
const fetchUsers = createAsyncThunk('user/fetchUsers',()=>{
    axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            const users = res.data.map((currElem) => currElem.name)
            console.log(users);
        })
}) 

const userSlice = createSlice({
    name:'users',
    initialState,
    extraReducers:(builder)=>{ // using builder we add cases for each of the promise lifecyle methods
        builder.addCase(fetchUsers.pending,(state, action)=>{
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled,(state, action)=>{
            state.loading = false,
            state.users = action.payload
        })
        builder.addCase(fetchUsers.rejected,(state, action)=>{
            state.loading = true
        })
    },
})

module.exports = userSlice.reducer