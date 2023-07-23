import React, { createContext, useState } from 'react';

export const FavouriteContext = createContext();

export const FavouriteContextProvider = ({ children }) => {
    const [FavouriteCount, setFavouriteCount] = useState(0);

    const incrementFavourite = () => {
        setFavouriteCount((prevCount) => prevCount + 1);
    };

    const decrementFavourite = () => {
        setFavouriteCount((prevCount) => prevCount - 1);
    };

    return (
        <FavouriteContext.Provider
            value={{ FavouriteCount, setFavouriteCount, incrementFavourite, decrementFavourite }}>
            {children}
        </FavouriteContext.Provider>
    );
};
