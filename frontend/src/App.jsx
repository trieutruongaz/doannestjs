
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPupup from './components/LoginPopup/LoginPupup'
import Verify from './pages/verify/verify'
import MyOrders from './pages/myOrders/myOrders.jsx';







const App = () => {

  const [showLogin,setShowLogin] = useState(false)
 
  
  return (
    <>
    {showLogin?<LoginPupup setShowLogin={setShowLogin}/>:<></>}  
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>} />
        <Route path='/MyOrders' element={<MyOrders/>}/>



        
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
