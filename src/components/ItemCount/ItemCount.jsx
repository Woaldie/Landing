import React, { useState } from "react";
import { Button } from "@mui/material";
import s from "./ItemCount.module.css"
  
export default function ItemCount({stock, onAdd}) {
  const [count, setCount] = useState(0);
  
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
          onClick={() => onAdd (count)}
        >
          Add
        </Button>
        </div>
      </div>
    </>
  );
}
