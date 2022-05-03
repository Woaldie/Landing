import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import s from './ItemDetail.module.css'

export default function ItemDetail({image, name, price, id, description, stock, count}){

  const {addToCart, cart} = useCartContext()
  
    return (
      <>
        <div className={s.containerDetail} key={id}>
          <img src={image} alt={name} className = {s.image} />
          <div>
            <h2>{name}</h2>
            <h3>${price}</h3>
            <p>{description}</p>
            <p>{stock}</p>
            <div >
            {cart.length === 0 ? <ItemCount stock={stock} count={count} addToCart={addToCart} /> : <Button as={Link} to="/cart">Show Cart, ({cart.length} items added)</Button>}
            </div>
          </div>
        </div>
     </>   
    )
}