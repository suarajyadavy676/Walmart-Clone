import Navbar2 from './components/Navbar2'
import Navbar1 from './components/Navbar1'
import Footer from './components/Footer'
import Products from './components/Products'
import AllRoutes from './routes/AllRoutes'


function App() {
// console.log(hello)
  return (
    <>
      <Navbar2/>
      <Navbar1/>
      {/* <Products/> */}
      <AllRoutes/>
      <Footer/>
    </>
  )
}

export default App
