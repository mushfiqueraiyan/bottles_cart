import React, { use,useState,useEffect } from 'react'
import './Bottles.css'
import Bottle from './Bottle'
import {getCart, removeCart, saveCart } from '../../utilities/localStorage'


const Bottles = ({bottlesPromise}) => {

  const [cart, setCart] = useState([])
    

    const handleCart = (bottle) =>{
        const newCart = [...cart,bottle]
        setCart(newCart)
        
    }

    const handleRemove = (id)=>{
      const remainingCart = cart.filter((storedID)=> storedID.id !== id)
      setCart(remainingCart)
      removeCart(id)
    }


    
   
  const bottles = use(bottlesPromise)

  return (
    <div>
      <h2>Add Bottles items to the cart: {bottles.length}</h2>

      <h1>Cart {cart.length}</h1>
      <div className='bottles-container-flex'>
      {
        cart.map((c)=> <li key={c.id}><img src={c.image} width={100} height={100} alt="" /> <button onClick={()=>handleRemove(c.id)}>X</button></li>)
      }
      </div>
     <div className='bottles-container'>
     {
      bottles.map((bottle)=> <Bottle key={bottle.id} bottle={bottle} handleCart={handleCart}/>)
     }
     </div>
    </div>
  )
}

export default Bottles