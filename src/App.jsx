import { useState } from 'react'


import Navbar from './components/Navbar'
import Shop from '../src/Page/Shop'
import Shopcategory from './Page/Shopcategory'
import Product from './Page/Product'
import Cart from './Page/Cart'
import LoginSignup from './Page/LoginSignup'

import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Mens from './Page/Mens'
import Womens from './Page/Womens'
import Kids from './Page/Kids'
import New from './Page/New'
import Special from './Page/Special'
function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/news' element={<New/>}/>
        <Route path='/mens' element={<Mens category="men"/>}/>
        <Route path='/womens' element={<Womens />}/>
        <Route path='/kids' element={<Kids category="kid"/>}/>
        <Route path='/specials' element={<Special/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
      
      
      
      
    </div>
  )
}

export default App
