import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Divider from './components/Divider'
import FirstShoppingSection from './components/FirstShoppingSection'
import SecondDivider from './components/SecondDivider'
import SecondShoppingSection from './components/SecondShoppingSection'
import Tutorial from './components/Tutorial'
import Footer from './components/Footer'
import ShoppingCart from './components/ShoppingCart'
import { useState } from 'react'


function App() {

  const[chairsData,setChairsData]=useState([])
  const[productsInTheCart,setProductsInTheCart]=useState([])
  const[dark,setDark]=useState(false)

  return (
    <div className={`${dark == true ? 'bg-[#201823]' : 'bg-[#bababa]'}`}>
      <BrowserRouter>
        <Routes>
          <Route index element={
            <>
              <NavBar dark={dark} setDark={setDark} />
              <Hero dark={dark} setDark={setDark} />
              <Divider />
              <FirstShoppingSection dark={dark} chairsData={chairsData} setChairsData={setChairsData} />
              <SecondDivider />
              <SecondShoppingSection chairsData={chairsData} setChairsData={setChairsData} />
              <Tutorial dark={dark} setDark={setDark} />      
              <Footer />
            </>
          } />
          <Route path='/cart' element={
            <ShoppingCart productsInTheCart={productsInTheCart} setProductsInTheCart={setProductsInTheCart} chairsData={chairsData} />
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
