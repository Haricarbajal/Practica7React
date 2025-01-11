import { useState } from "react";
import { Link } from "react-router-dom";
import '../Styles/style.css';

function Login({ setIsAuthenticated }) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function autenticarUsuario(nombre, password) {
        const user = { nombre, password };
        const isValid = verificarLocalStorage(user);

        if (isValid) {
            setIsAuthenticated(true);
            localStorage.setItem("isAuthenticated", "true");
        }


        setUserName("");
        setPassword("");
    }

    function verificarLocalStorage(user) {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const usuario = localStorage.getItem(key);

            if (usuario) {
                const obj = JSON.parse(usuario);

                if (obj?.nombre === user.nombre && obj?.password === user.password) {
                    console.log("Usuario autenticado:", obj.nombre);
                    return true;
                }
            }
        }
        return false;
    }

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: '100px auto',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
        fontFamily: "'Roboto', sans-serif",
    };

    const titleStyle = {
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '28px',
        fontWeight: '600',
        color: '#333',
    };

    const labelStyle = {
        marginBottom: '12px',
        fontSize: '14px',
        color: '#666',
        fontWeight: '500',
    };

    const inputStyle = {
        padding: '15px',
        fontSize: '16px',
        marginBottom: '18px',
        border: '2px solid #ddd', // Cambié `borderColor` por `border` completo
        borderRadius: '8px',
        outline: 'none',
        transition: 'border-color 0.3s ease',
    };

    const inputFocusStyle = {
        border: '2px solid #007bff',
    };

    const buttonStyle = {
        padding: '15px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '500',
        transition: 'background-color 0.3s ease',
        marginBottom: '18px', // Añadí un margen para separar los botones
    };
    const buttonStyleMenu = {
        padding: '15px',
        fontSize: '16px',
        backgroundColor: 'gray',
        color: 'black',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '500',
        transition: 'background-color 0.3s ease',
        marginBottom: '18px', // Añadí un margen para separar los botones
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3',
    };

    const [inputFocus, setInputFocus] = useState({ userName: false, password: false });

    return (
        <form
            style={formStyle}
            onSubmit={(e) => {
                e.preventDefault();
                autenticarUsuario(userName, password);
            }}
        >
            <h1 style={titleStyle}>Login</h1>

            <label style={labelStyle}>Nombre de Usuario:</label>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onFocus={() => setInputFocus({ ...inputFocus, userName: true })}
                onBlur={() => setInputFocus({ ...inputFocus, userName: false })}
                style={{ ...inputStyle, ...(inputFocus.userName ? inputFocusStyle : {}) }}
            />

            <label style={labelStyle}>Contraseña:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setInputFocus({ ...inputFocus, password: true })}
                onBlur={() => setInputFocus({ ...inputFocus, password: false })}
                style={{ ...inputStyle, ...(inputFocus.password ? inputFocusStyle : {}) }}
            />

            <button
                style={buttonStyle}
                type="submit"
                onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
            >
                Login
            </button>

            {/* Botón de registro con el estilo de un botón */}
            <Link
                to="/Register"
                style={{
                    ...buttonStyle,
                    display: 'inline-block',
                    textAlign: 'center',
                    textDecoration: 'none', // Eliminar subrayado
                }}
            >
                Register
            </Link>
            <Link
                to="/"
                style={{
                    ...buttonStyleMenu,
                    display: 'inline-block',
                    textAlign: 'center',
                    textDecoration: 'none', // Eliminar subrayado
                }}
            >
                Noticias
            </Link>
        </form>
    );
}

export default Login;