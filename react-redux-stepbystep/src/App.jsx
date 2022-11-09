import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import HomeContainer from './containers/HomeContainer.jsx'
import HeaderContainer from './containers/HeaderContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainer />
    </div>
  )
}

export default App
