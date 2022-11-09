import { useState } from 'react'
import './App.css'
import CakeView from './features/cake/CakeView'
import IcecreamView from './features/icecream/IcecreamView'
import UserView from './features/user/UserView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  )
}

export default App

// STEP : 2
// we need to make the redux store availabe to thr react component tree
// REACT_REDUX: to provide the redux store to our react application, lib exports a component called provider
