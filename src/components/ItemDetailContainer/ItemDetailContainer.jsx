import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { PromiseProducts} from "../Products/Products";
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const {id} = useParams ();

  useEffect(() => {
    PromiseProducts
        .then(res => setItem(res.find(p => p.id === Number(id))))
        .catch(error => console.log(error));
  },[id])


  return (
    <>
      <ItemDetail {...item} />
    </>
  );
}

export default ItemDetailContainer;
