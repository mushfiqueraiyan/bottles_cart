import React from 'react'
import './Bottles.css'

const Bottle = ({bottle, handleCart}) => {

    const {name,capacity,image} = bottle

    const nameStyle = {
        fontWeight: "700"
    }
  return (
    <div className='card'>
    
        <img width={200} src={image}></img> <br /> 
        <b>Name</b>: {name} <br /> 
        <b>Capacity</b> : {capacity} <br /> 
    
        <button onClick={()=> handleCart(bottle)}>Buy Now</button>
    
    </div>
  )
}

export default Bottle