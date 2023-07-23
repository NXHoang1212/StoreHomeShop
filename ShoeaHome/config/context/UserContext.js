import { createContext, useState } from "react";


export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const { children } = props;
    const [getUser, setUser] = useState([]); // [1
    return (
        <UserContext.Provider value={{ getUser, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
