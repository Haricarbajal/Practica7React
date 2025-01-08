import { useState, createContext } from "react";

export const textoContext = createContext(null);

function ThemeProvider({children}) {
    const [texto, setTexto] = useState('hola');

    const changeTexto = () => {
        setTexto((prevTexto) => (prevTexto === 'hola' ? 'chau' : 'hola'));
    };

    return (
        <textoContext.Provider value={{ texto, changeTexto }}>
            {children}
        </textoContext.Provider>
    );
}

export default ThemeProvider;
