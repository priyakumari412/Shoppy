// import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loginsignup from './pages/Loginsignup'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Category from './pages/Category'
import Shop from './pages/Shop'
import Footer from './components/footer/Footer'
import men_banner from './components/Assets/men.png'
import women_banner from './components/Assets/women.png'
import kid_banner from './components/Assets/kid.png'
import ShopContextProvider from './Context/ShopContext'
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ShopContextProvider>
          <Routes>
              <Route path='/Shoppy' element={<Shop />} />
              <Route path='/mens' element={<Category banner={men_banner} category="men" />} />
              <Route path='/womens' element={<Category banner={women_banner} category="women" />} />
              <Route path='/kids' element={<Category banner={kid_banner} category="kid" />} />
              <Route path='/product/:productId' element={<Product />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/loginsignup' element={<Loginsignup />} />  
          </Routes>
        </ShopContextProvider>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
