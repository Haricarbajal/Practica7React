import { useState } from "react";
import { Link } from "react-router-dom";
//import React, { useState } from "react";

function Register() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [contador, setContador] = useState(
        parseInt(localStorage.getItem("numero")) || 0
    );

    function actualizarUsuario(nombre, correoElectronico, password) {
        const user = {
            nombre,
            correoElectronico,
            password
        };

        guardarLocalStorage(contador, user);
        localStorage.setItem("numero", contador);
        setContador(contador + 1);

        setUserName("")
        setEmail("")
        setPassword("")
    }

    function guardarLocalStorage(contador, user) {
        localStorage.setItem(`user${contador}`, JSON.stringify(user));
        console.log(`Se ha guardado en el localStorage al usuario ${contador}`);
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
        border: '2px solid #ddd',
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
        marginBottom: '18px', // Separación entre botones
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3',
    };

    const linkButtonStyle = {
        ...buttonStyle,
        display: 'inline-block',
        textAlign: 'center',
        textDecoration: 'none',
        backgroundColor: '#f1f1f1', // Fondo más claro para el enlace
        color: '#333',
    };

    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    };

    const [inputFocus, setInputFocus] = useState({ userName: false, email: false, password: false });

    return (
        <form 
            style={formStyle} 
            onSubmit={(e) => {
                e.preventDefault();
                actualizarUsuario(userName, email, password);
            }}
        >
            <h1 style={titleStyle}>Registro</h1>

            <label style={labelStyle}>Nombre de Usuario:</label>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onFocus={() => setInputFocus({ ...inputFocus, userName: true })}
                onBlur={() => setInputFocus({ ...inputFocus, userName: false })}
                style={{ ...inputStyle, ...(inputFocus.userName ? inputFocusStyle : {}) }}
            />

            <label style={labelStyle}>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setInputFocus({ ...inputFocus, email: true })}
                onBlur={() => setInputFocus({ ...inputFocus, email: false })}
                style={{ ...inputStyle, ...(inputFocus.email ? inputFocusStyle : {}) }}
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
                Registrar
            </button>

            <div style={buttonContainerStyle}>
                <Link 
                    to="/"
                    style={linkButtonStyle}
                >
                    Inicio
                </Link>

                <Link 
                    to="/Login"
                    style={linkButtonStyle}
                >
                    Login
                </Link>
            </div>
        </form>
    );
}

export default Register;
