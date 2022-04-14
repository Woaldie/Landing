import React, { useEffect, useState } from "react";
import  {PromiseProducts}  from "../Products/Products";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    PromiseProducts.then((resp) => setProduct(resp)).catch((err) =>
      console.log(err)
    );
  }, []);
  return (
    <>
      <ItemList prods={product} />
    </>
  );
}
