import { Routes,Route } from 'react-router-dom'
import Products from '../components/Products'
import Search from '../components/Search'
import SmartPhone from './SmartPhone'
import Laptop from './Laptop'
import WomenDress from './WomenDress'
import WomenJewellary from './WomenJewellary'
import Sunglass from './Sunglass'
import Cart from '../components/Cart'

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path ="/search" element={<Search/>}/>
      <Route path='/smartphones' element={<SmartPhone/>}/>
      <Route path='/laptops' element={<Laptop/>}/>
      <Route path='/womens-dresses' element={<WomenDress/>}/>
      <Route path='/womens-jewellery' element={<WomenJewellary/>}/>
      <Route path='/sunglasses' element={<Sunglass/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}

export default AllRoutes
