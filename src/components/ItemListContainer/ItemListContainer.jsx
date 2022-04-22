import React, { useEffect, useState } from "react";
import  {PromiseProducts}  from "../Products/Products";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom"

export default function ItemListContainer() {
  const [product, setProduct] = useState([]);
  const {category} = useParams ();

  useEffect(() => {
    PromiseProducts
        .then(
          (resp) => {
            if(category){
          
            setProduct(resp.filter(p => p.category === parseInt(category)))
          
          }else{
            setProduct(resp)
          }}
            )
  },[category]);

  return (
    <>
      <ItemList prods={product} />
    </>
  );
}
