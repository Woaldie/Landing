import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { promiseProduct } from "../Products/Products";

const ItemDetailContainer = () => {

    const[product, setProduct] = useState({});

    useEffect(() => {
         promiseProduct().then((res) => {
            setProduct(res);
         });
    }, []);

    //console.log(product);

    return (
        <>
            <ItemDetail product = {product} />
        </>
    )
}

export default ItemDetailContainer;