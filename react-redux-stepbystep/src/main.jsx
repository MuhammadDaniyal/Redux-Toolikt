import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './services/reducers/index'

const store = createStore(rootReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <App />
  </Provider>

)
