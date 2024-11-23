import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Placeorder/Placeorder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/Loginpopup/LoginPopup'
function App() {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <div>
      {showLogin ? <LoginPopup setShowLogin ={setShowLogin}/> : <></>}
      <div className='app'>
      <Navbar setShowLogin = {setShowLogin}/> 
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/order' element={<Placeorder />}></Route>
      </Routes>
    </div>
    <Footer />
    </div>
    
  )
}

export default App