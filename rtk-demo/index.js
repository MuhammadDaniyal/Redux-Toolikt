const store =  require('./app/store')

const cakeActions = require('./features/cake/cakeSlice').cakeActions // as a name export ki as a name import
const iceCreamActions = require('./features/icecream/iceCreamSlice').iceCreamActions

console.log('Initial State', store.getState());

// let subscribe to updates in the store
const unsubscribe = store.subscribe(() => {
    console.log('Updated State', store.getState());
})

// 1st Way

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.restocked(3))


// 2nd Way

// unsubscribe listening to the store
unsubscribe()

