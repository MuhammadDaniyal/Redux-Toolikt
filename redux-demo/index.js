// import redux from 'redux'
const redux = require('redux')
const createStore = redux.legacy_createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOKED = 'CAKE_RESTOKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOKED = 'ICECREAM_RESTOKED'

const orderCake = () => {
    return {
        type: "CAKE_ORDERED", // action
        payload: 1  // payload - any additional information you want to send
    }
}
const restokedCake = (qty = 1) => {
    return {
        type: "CAKE_RESTOKED", // action
        payload: qty
    }
}
const orderIceCream = (qty = 1) => {
    return {
        type: "ICECREAM_ORDERED", // action
        payload: qty  // payload 
    }
}
const restokedIceCream = (qty = 1) => {
    return {
        type: "ICECREAM_RESTOKED", // action
        payload: qty  // payload 
    }
}

const initialCakeState = {
    numOfCakes: 10,
}
const initialIceCreamState = {
    numOfIceCream: 12,
}

// (previousState, action) => newState
const cakeReducer = (state = initialCakeState, action) => { // reducer function accept 2 arg, initialState and action  
    switch (action.type) {
        case CAKE_ORDERED:
            return {  // return a new state of an application as an object
                ...state, // create copy of state object
                numOfCakes: state.numOfCakes - 1,
            }
        case CAKE_RESTOKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload,
            }
        default:
            return state;
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - action.payload,
            }
        case ICECREAM_RESTOKED:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream + action.payload,
            }
        case CAKE_ORDERED:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1,
            }
        default:
            return state;
    }
}

// combine multiple reducers
const rootReducers = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// create a store , accept a reducer function as a parameter 
const store = createStore(rootReducers) // redux store holding an application state

console.log('InitialState:', store.getState());

// the app to subscribe to changes in the store, which execute when state changes in redux store
const unsubscribe = store.subscribe(() => {
    console.log("updatedState:", store.getState());
});

// dispatch method update te state 

/*
// ONE WAY
store.dispatch(orderCake()) // which will in turn an action method
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restokedCake(10))
*/

// SECOND WAY
const actions = bindActionCreators(
    { orderCake, restokedCake, orderIceCream, restokedIceCream },
    store.dispatch // secArg we want to bind it to
)
actions.orderCake()
actions.orderCake()
actions.restokedCake(10)
actions.orderIceCream(3)
actions.restokedIceCream(3)


// As you call the unsubscribe , it is a function which is returned from the subscribe function so it does not call the subscribe function again,
//  So, its always advisable to unsubscribe an action as soon as the component gets unmounted.
unsubscribe() // finally unsubscribe to the changes