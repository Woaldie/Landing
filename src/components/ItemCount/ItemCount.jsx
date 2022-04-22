import React, { useState } from "react";
import { Button } from "@mui/material";
import s from "./ItemCount.module.css"
  
export default function ItemCount({stock}) {
  const [count, setCount] = useState(0);
  
  function agregar() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function quitar() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function comprar() {
    alert("Agregaste " + count + " productos a tu carrito");
  }

  return (
    <>
      <div>
        <div className={s.contador}>
        <h2>{count}</h2>
        <Button
          className="Agregar"
          variant="contained"
          color="success"
          onClick={agregar}
        >
          +
        </Button>
        <Button
          className="Quitar"
          variant="contained"
          color="error"
          onClick={quitar}
        >
          -
        </Button>
        </div>

        <div className={s.comprar}>
        <Button
          className="Comprar"
          variant="contained"
          disableElevation
          onClick={comprar}
        >
          Comprar
        </Button>
        </div>
      </div>
    </>
  );
}
