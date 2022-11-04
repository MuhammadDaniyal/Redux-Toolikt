const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.legacy_createStore
const applyMiddleware = redux.applyMiddleware

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

// actionCreator
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILED:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }

        default:
            break;
    }
}

// action creator return an action

// thunkMiddleware: it is the ability for an action creator to return a function instead of an action object, and this function also dispatch regular action

// async action creator - use middleware woh bh thunkMiddleware 
const fetchUsers = () => {
    return async function (dispatch) {
        dispatch(fetchUsersFailure())
        
        // axios
        //     .get('https://jsonplaceholder.typicode.com/users')
        //     .then((res) => {
        //         const users = res.data.map((currElem) => currElem.name)
        //         // console.log(users);
        //         dispatch(fetchUsersSuccess(users))
        //     })
        //     .catch((error) => {
        //         dispatch(fetchUsersFailure(error.message))
        //     })

        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            const users = await res.data.map((currElem) => currElem.name)
            dispatch(fetchUsersSuccess(users))
        } catch (error) {
            dispatch(fetchUsersFailure(error.message))
        }
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});
// unsubscribe()

// dispatch async action creator
store.dispatch(fetchUsers())