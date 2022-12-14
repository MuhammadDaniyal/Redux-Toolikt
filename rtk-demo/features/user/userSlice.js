const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')

const initialState = {
    loading: false,
    users: [],
    error: ''
}
// let data = []

// reduxtoolkit provide createAsyncThunk function to implement the creation & dispatching of async actions

// it accept two parameter - first is action name (action type) - 2nd is callback function that create payload
// special functionality: it will automatically dispatch lifecycle actions on the returned promise
// Generates pending, fulfilled and rejected action types - this is promise lifecycle method - or yeh action types extraReducers ma hi kaam krengi
const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.data.map(currElem => currElem.id))
    
        // const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        // const data = await res
        // return data.map(currElem => currElem.id)
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => { // using builder we add cases for each of the promise lifecycle methods
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            // state.users = data
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    },
})

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers // export async function

