import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext);

function CartProvider(props) {
  const [cart, setCart] = useState([]);
    console.log(cart)
  const clearCart = () => {
    setCart([]);
  };

  const removeItem = (item) => {
    const isInCart = cart.find((x) => x.id === item.id);
    if (isInCart === 1) {
      setCart(cart.filter((x) => x.id !== item.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === item.id
            ? { ...isInCart, quantity: isInCart.quantity - 1 }
            : x
        )
      );
    }
  };

  const addToCart = (item) => {
    const isInCart = cart.find((x) => x.id === item.id);
    if (isInCart) {
      setCart(
        cart.map((x) =>
          x.id === item.id
            ? { ...isInCart, quantity: isInCart.quantity + 1 }
            : x
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          setCart,
          addToCart,
          clearCart,
          removeItem,
        }}
      >
        {props.children}
      </CartContext.Provider>
    </>
  );
}

export default CartProvider;
