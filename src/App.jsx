import { useContext, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Footer from './components/Footer'
import Products from './components/Products'

function App() {
// console.log(hello)
  return (
    <>
      <Navbar/>
      <Products/>
      <Footer/>
    </>
  )
}

export default App
