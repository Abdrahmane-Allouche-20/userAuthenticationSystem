import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/login'
import Register from './pages/register'

function App() {
  const [count, setCount] = useState(0)

  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App
