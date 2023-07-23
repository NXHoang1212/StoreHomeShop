import React, { createContext, useState } from 'react';

export const NotifeeContext = createContext();

export const NotfifeeProvider = ({ children }) => {
    const [NotifeeCount, SetNotifeeCount] = useState(0);
    const incrementNotifeeItem = () => {
        setCartItemCount((prevCount) => prevCount + 1);
    };

    const decrementNotifeeItem = () => {
        setCartItemCount((prevCount) => prevCount - 1);
    };

    return (
        <NotifeeContext.Provider
            value={{ NotifeeCount, SetNotifeeCount, incrementNotifeeItem, decrementNotifeeItem }}>
            {children}
        </NotifeeContext.Provider>
    );
};
