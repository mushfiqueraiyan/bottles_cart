import React from 'react'
import './Bottles.css'

const Bottle = ({bottle,handleCart}) => {

  const {name,price,image} = bottle
  // console.log(bottle)
  
  return (
    <div className='card'>


    
      <img src={image} width={300} height={300} alt="" />
      <h3>Name: {name}</h3>
      <p>Price: {price}</p>
      <button onClick={()=> handleCart(bottle)}>Buy Now</button>
    
    </div>
  )
}

export default Bottle