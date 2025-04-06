import React from 'react'

const Carts = ({cart, handleRemove}) => {
  return (
    <div className='bottles-container-flex'>
    {
      cart.map((c)=> <li key={c.id}><img src={c.image} width={100} height={100} alt="" /> <button onClick={()=>handleRemove(c.id)}>X</button></li>)
    }
    </div>
  )
}

export default Carts