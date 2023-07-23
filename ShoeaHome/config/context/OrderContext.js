import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [selectedShipping, setSelectedShipping] = useState(null);
    const [promocode, setPromocode] = useState('');
    return (
        <OrderContext.Provider
            value={{ selectedShipping, setSelectedShipping, promocode, setPromocode }}    >
            {children}
        </OrderContext.Provider>
    );
};
