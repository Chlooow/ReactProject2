import { render } from "@testing-library/react";
import { useState } from "react"
import Banner from "./Banner";
import Header from "./Header";
import logo from '../assets/flag-400.png'
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import CareScale from "./CareScale";


function App() {

  //on fait remonter cart dans App
  //page blanche
  const [cart, updateCart] = useState([])

  return (
  <div> <Banner>
  <img src={logo} alt='La maison jungle' className='lmj-logo' />
  <Header />
  </Banner>
  <div className="lmj-Layout-inner">
  <Cart cart = {cart} updateCart={updateCart}/> 
  <ShoppingList cart = {cart} updateCart={updateCart}/>
    </div>
   <CareScale/> 
   </div>
   )
}


export default App;