import React, { use,useState,useEffect } from 'react'
import Bottle from './Bottle';
import './Bottles.css'
import { addCart, getCart, removeCart } from '../../utilities/localStorage';

const Bottles = ({bottlesPromise}) => {
    
    const bottles = use(bottlesPromise);
    // console.log(bottles)

    const [cart, setCart] = useState([])

    const handleCart = (bottle)=>{
        const newCart = [...cart, bottle]
        setCart(newCart)

        //save the bottle is in the storage 

        addCart(bottle.id)
    }

    //useEffect

    useEffect(() => {
      const storedCartId = getCart();
      // console.log(storedCartId,bottles)


      const storedCart = []

      for(const id of storedCartId){
        // console.log(id)

        const cartBottle = bottles.find(bottle => bottle.id === id)
        if(cartBottle){
          storedCart.push(cartBottle)
        }
      }

      console.log("Stored Cart: ", storedCart)
      setCart(storedCart)

    }, [bottles])


    const handleRemoveCart = (id)=>{
      console.log("Remove item from the cart", id)

      const remainingCart = cart.filter(bottle => bottle.id !== id)
      setCart(remainingCart)
      removeCart(id)
    }
    
  return (
    <div>
      Bottles : {bottles.length}
    <p>Cart {cart.length}</p>
    <div className='bottles-container-flex'>
    {cart.map((c)=> <li key={c.id}><img width={70} height={70} src={c.image}></img> <button onClick={()=>handleRemoveCart(c.id)}>X</button></li>)}
    </div>
    
    <div className='bottles-container'>
    {bottles.map((bottle)=> <Bottle key={bottle.id} bottle={bottle} handleCart={handleCart}/>)}
    </div>
    </div>
  )
}

export default Bottles