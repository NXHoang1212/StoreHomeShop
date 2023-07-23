import { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = (props) => {
  const { children } = props;
  const [selectedLanguage, setSelectedLanguage] = useState(false);

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
