import  { useState } from 'react'
import NavBar from '../component/NavBar'
import Cart1 from '../component/Cart'

const Cart = () => {
    const[cartItems, setCartItems] =useState(['Product 1', 'Product 2', 'Product 3'])
  return (
    <div>
        <NavBar cartItemsCount ={cartItems.length}/>
        <Cart1 cartItems={cartItems} onClear={()=>setCartItems([])}/>
    </div>
  )
}

export default Cart