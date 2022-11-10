import { legacy_createStore as createStore } from 'redux'

import { rootReducer } from '../services/reducers/index'

export const store = createStore(rootReducer) 