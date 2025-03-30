import React, { use,useState } from 'react'
import Bottle from './Bottle';
import './Bottles.css'

const Bottles = ({bottlesPromise}) => {
    
    const bottles = use(bottlesPromise);
    console.log(bottles)

    const [cart, setCart] = useState([])

    const handleCart = (bottle)=>{
        const newCart = [...cart, bottle]
        setCart(newCart)
    }
  return (
    <div>Bottles : {bottles.length}
    
    {cart.map((c)=> <li key={c.id}><img width={70} src={c.image}></img>  Name: {c.name}</li>)}
    <div className='bottles-container'>
    {bottles.map((bottle)=> <Bottle key={bottle.id} bottle={bottle} handleCart={handleCart}/>)}
    </div>
    </div>
  )
}

export default Bottles