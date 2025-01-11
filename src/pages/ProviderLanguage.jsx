import { useState, createContext } from "react";

export const languageContext = createContext(null);

function LanguageProvider({children}){
    const [language, setLanguage] = useState('es');

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return(
        <languageContext.Provider value={{language, changeLanguage}}>
            {children}
        </languageContext.Provider>
    );
};
export default LanguageProvider;