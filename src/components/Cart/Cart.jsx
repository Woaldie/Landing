import React from 'react'
import { useCartContext } from '../Context/CartContext';

export default function Cart() {
  const { cart, addToCart, removeItem } = useCartContext();
  
  return (
    <>
      <h2>Cart Items</h2>
      <div>{cart.length === 0 && <div>Cart is empty</div>}</div>
        {cart.map((item) => (
          <div key={item.id} >
            <div >{item.name}</div>
            <div >
              <button onClick={() => removeItem(item)} >
                -
              </button>{' '}
              <button onClick={() => addToCart(item)}>
                +
              </button>
            </div>
            <div>
              {item.quantity} x ${item.price}
            </div>

          </div>
        ))}
    </>
  )
}
