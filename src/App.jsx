import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import AboutUs from './pages/AboutUs'
import Prices from './pages/Prices'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path ="/"  element={<Home/>}/>
      <Route path ="/gallery"  element={<Gallery/>}/>
      <Route path ="/about"  element={<AboutUs/>}/>
      <Route path ="/prices"  element={<Prices/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </> 
  )
}

export default App
