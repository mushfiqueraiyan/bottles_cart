import React, { use,useState,useEffect } from 'react'
import './Bottles.css'
import Bottle from './Bottle'
import Carts from '../Carts'



const Bottles = ({bottlesPromise}) => {


  const bottles = use(bottlesPromise)

  const [cart, setCart] = useState([])
    

    const handleCart = (bottle) =>{
        const newCart = [...cart,bottle]
        setCart(newCart)
        
    }

    const handleRemove = (id)=>{
      const remainingCart = cart.filter((storedID)=> storedID.id !== id)
      setCart(remainingCart)
      
    }


    
   
  

  return (
    <div>
      <h2>Add Bottles items to the cart: {bottles.length}</h2>

      <h1>Cart {cart.length}</h1>

      <Carts cart={cart} handleRemove={handleRemove}/>
     <div className='bottles-container'>
     {
      bottles.map((bottle)=> <Bottle key={bottle.id} bottle={bottle} handleCart={handleCart}/>)
     }
     </div>
    </div>
  )
}

export default Bottles