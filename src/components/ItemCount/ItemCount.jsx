import React, { useState } from "react";
import { Button } from "@mui/material";
import s from "./ItemCount.module.css"
import { useCartContext } from "../Context/CartContext";
  
export default function ItemCount({stock}) {
  const [count, setCount] = useState(0);
  const {addToCart} = useCartContext()
  function increment() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <div>
        <div className={s.contador}>
        <h2>{count}</h2>
        <Button
          variant="contained"
          color="success"
          onClick={increment} 
        >
          +
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={decrement} 
        >
          -
        </Button>
        </div>

        <div className={s.comprar}>
        <Button
          variant="contained"
          disableElevation
          onClick={() => addToCart (addToCart)}
        >
          Add
        </Button>
        </div>
      </div>
    </>
  );
}
