import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './JS/home'
import Cater from './JS/leftwingCategories'
import Feed from './JS/feed'
import Help from './JS/help'
import MyAccount from './JS/account'
import Logger from './Logger'
import { Provider } from 'react-redux'
import Store from './store'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route path='/home'   element={<Home />} ></Route>
            <Route index element={<Logger />}></Route>
            <Route path='/categories' element={<Cater />}></Route>
            <Route path='/feeds' element={<Feed />}></Route>
            <Route path='/accounts' element={<MyAccount />}></Route>
            <Route path='/help' element={<Help />}></Route>
          </Routes>      
        </BrowserRouter>
    </Provider>

    
    
    </>
  )
}

export default App
