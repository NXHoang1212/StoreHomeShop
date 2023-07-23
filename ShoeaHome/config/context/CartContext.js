import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItemCount, setCartItemCount] = useState(0);

  const incrementCartItem = () => {
    setCartItemCount((prevCount) => prevCount + 1);
  };

  const decrementCartItem = () => {
    setCartItemCount((prevCount) => prevCount - 1);
  };

  return (
    <CartContext.Provider
      value={{
        cartItemCount,
        setCartItemCount,
        incrementCartItem,
        decrementCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
