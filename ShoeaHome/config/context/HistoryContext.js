import { createContext, useState } from 'react';

export const HistoryContext = createContext();

export const LanguageProvider = (props) => {
    const { children } = props;
    const [history, setHistory] = useState([]);

    return (
        <HistoryContext.Provider value={{ history, setHistory }}>
            {children}
        </HistoryContext.Provider>
    );
};
