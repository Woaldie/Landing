import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { PromiseProducts} from "../Products/Products";

function ItemDetailContainer() {
  const [product, setItem] = useState([]);

  useEffect(() => {
    PromiseProducts
        .then(res => setItem(res.find(p => p.id === 1)))
        .catch(error => console.log(error));
  },[])

  return (
    <>
      <ItemDetail {...product} />
    </>
  );
}

export default ItemDetailContainer;
