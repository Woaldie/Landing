import React from "react";
import s from './ItemDetail.module.css'

const ItemDetail = ({product}) => {
    return (
        <div className={s.containerDetail}>
          <img src={product.image} alt={product.name} className = {s.image} />
          <div>
            <h2>{product.name}</h2>
            <h3>${product.price}</h3>
          </div>
        </div>
        
    )
}
export default ItemDetail;