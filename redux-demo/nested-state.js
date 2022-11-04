const redux = require('redux')
const createStore = redux.legacy_createStore
const produce = require('immer').produce

const initialState = {
    name: 'Vishwas',
    address: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA'
    }
}

const STREET_UPDATED = 'STREET_UPDATED'
const updateStreet = street => {
    return {
        type: STREET_UPDATED,
        payload: street
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
            // return {
            //     ...state, // copied & spread current state
            //     address: { 
            //         // ...state.address - nhh krenga to city or country updatedState my ayenga hi nh 
            //         ...state.address, // copied & spread currentAddresState masa address
            //         street: action.payload
            //     }
            // }

            // immer allow us to do is update this draft state as if state is mutable
            // when you want update an nested State
            return produce(state, (draft) => { // draft copy of the state
                draft.address.street = action.payload  // update the property directly but immer translate in actual code
            })
        default: {
            return state
        }
    }
}

const store = createStore(reducer)

console.log('Initial State ', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('Updated State ', store.getState())
})

store.dispatch(updateStreet('456 Main St'))

unsubscribe()