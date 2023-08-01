import { createContext, useState } from "react";


export const ShoesContext = createContext();

export const ShoesContextProvider = (props) => {
    const { children } = props;
    const [isLogin, setIsLogin] = useState(false);
    return (
        <ShoesContext.Provider value={{ isLogin, setIsLogin }}>
            {children}
        </ShoesContext.Provider>
    );
};
