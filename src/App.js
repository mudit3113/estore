import logo from './logo.svg'
import './App.css'
import TopNav from './components/TopNav'
import CatNav from './components/CatNav'
import MainComponent from './components/MainComponent'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import Favourites from './components/Favourites'

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/productDetails" Component={ProductDetails} />
        <Route path="/cart" Component={Cart} />
        <Route path="/favourites" Component={Favourites} />
      </Routes>
    </div>
  )
}

export default App
