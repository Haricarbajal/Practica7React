import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { languageContext } from "./ProviderLanguage";
import { use } from "react";

function Articulo() {

    const { language, changeLanguage } = useContext(languageContext)

    if (language == null) {
        return <p>esperando lenguaje</p>
    }

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        maxWidth: "800px", // Limitar el ancho para mejor lectura
        margin: "0 auto", // Centrado horizontal
        fontFamily: "'Arial', sans-serif",
        lineHeight: "1.6",
    };

    const headlineStyle = {
        fontSize: "28px", // Tamaño grande para el titular
        fontWeight: "bold",
        marginBottom: "15px",
        textAlign: "center",
        color: "#333",
    };

    const imageStyle = {
        width: "100%",
        maxWidth: "600px", // Limita el tamaño máximo de la imagen
        height: "auto", // Mantén proporciones
        borderRadius: "8px", // Bordes redondeados
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Sombra elegante
        marginBottom: "15px",
    };

    const bodyStyle = {
        fontSize: "18px",
        color: "#555", // Color de texto para mayor contraste
        textAlign: "justify", // Alineación justificada para mejorar la legibilidad
    };

    const errorStyle = {
        fontSize: "24px",
        color: "red",
        textAlign: "center",
        marginTop: "50px",
    };


    const Menu = {
        display: "flex",               // Activamos flexbox
        justifyContent: "space-between", // Distribuye los elementos: izquierda, centro, derecha
        alignItems: "center",          // Asegura la alineación vertical
        position: "relative",          // Para ajustar posiciones si es necesario
        paddingTop: "10px",  // Centra horizontalmente el contenedor de idiomas
        paddingLeft: "20%",
        paddingRight: "20%"
    };

    const tituloStyle = {
        fontFamily: "'Times New Roman', Times, serif", // Usa la fuente Times New Roman como base y se puede ajustar según se requiera.
        fontSize: "36px",           // Tamaño de fuente grande para el título
        fontWeight: "bold",         // Fuente en negrita
        color: "#000",              // Color del texto (ajustar al tema de tu diseño)
        textAlign: "center",        // Centra el texto
        marginBottom: "20px"        // Espaciado inferior para el título
    };

    const titulo = {
        display: "flex",               // Activamos flexbox
        justifyContent: "space-between", // Distribuye los elementos: izquierda, centro, derecha
        alignItems: "center",          // Asegura la alineación vertical
        position: "relative",          // Para ajustar posiciones si es necesario
        padding: "10px",               // Espaciado interno opcional
    };

    const lupa = {
        flex: "0 0 auto",              // Evita que se estire o encoja
    };

    const baStyle = {
        flex: "0 0 auto",              // Evita que se estire o encoja
    };

    const contenedorLanguages = {
        display : 'flex',
        justifyContent : 'space-evenly',
        alignItems : 'center',
        margin : '20px'
    };




    const { idNoticia } = useParams();
    const [data, setData] = useState(null);


    useEffect(() => {
        fetch("https://news-foniuhqsba-uc.a.run.app")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    if (!data) {
        return <h1>cargando noticia...</h1>
    }

    const botonLanguage = {
        background: 'transparent', // Fondo transparente
        border: 'none', // Eliminar cualquier borde por defecto
        borderBottom: '2px solid gray', // Subrayado de color negro
        boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1)', // Sombra sutil
        color: 'gray', // Texto en color negro
        fontFamily: 'Inter, sans-serif', // Fuente
        fontSize: '0.875rem', // Fuente más pequeña
        fontWeight: '700', // Negrita
        padding: '8px 16px', // Espaciado reducido alrededor del texto
        cursor: 'pointer', // Cursor de puntero al pasar por encima
        textDecoration: 'none', // Eliminar decoración del texto
        transition: 'all 0.3s ease', // Animación suave para el hover
        display: 'inline-flex', // Alineación de contenido
        justifyContent: 'center', // Centrado del contenido
        alignItems: 'center', // Alineación de los elementos
        borderRadius: '4px', // Esquinas redondeadas
      };
      
    const noticia = data ? data.filter((n) => n.id === Number(idNoticia)) : []


    console.log(typeof idNoticia)
    console.log(noticia);


    return (
        <>
        <div style={contenedorLanguages}>
            <button style={botonLanguage} onClick={() => changeLanguage('es')}>Español</button>
            <button style={botonLanguage} onClick={() => changeLanguage('fr')}>Frances</button>
            <button style={botonLanguage} onClick={() => changeLanguage('pt')}>Portugues</button>
            <button style={botonLanguage} onClick={() => changeLanguage('it')}>Italiano</button>
            <button style={botonLanguage} onClick={() => changeLanguage('ch')}>Chino</button>
        </div>
            <div style={titulo}>
                <button style={{ ...lupa, all: 'unset' }}>🔎</button>
                <h1 style={tituloStyle}>The New York Time</h1>
                <h1 style={baStyle}></h1>
            </div>
            <div style={Menu}>
                <Link to={"/"} style={{ all: 'unset' }}>Inicio</Link>
                <Link to={"/about"} style={{ all: 'unset' }}>About</Link>
                <Link to={"/Section/Sport"} style={{ all: 'unset' }}>Sport</Link>
                <Link to={"/Section/Finance"} style={{ all: 'unset' }}>Finance</Link>
                <Link to={"/Section/World News"} style={{ all: 'unset' }}>WorldNews</Link>
                <Link to={"/Section/Technology"} style={{ all: 'unset' }}>Technology</Link>
                <Link to={"/Section/Entertainment"} style={{ all: 'unset' }}>Entertainment</Link>
            </div>

            <div style={containerStyle}>
                {noticia.length === 0 ? (
                    <h1 style={errorStyle}>no existe</h1>
                ) : (
                    noticia.map((Articulo) => (
                        <>
                            <h1 key={Articulo.id} style={headlineStyle}>{Articulo.translations[language].headline}</h1>
                            <img src={Articulo.image_url} style={imageStyle} />
                            <p style={bodyStyle}>{Articulo.body}</p>
                        </>
                    ))
                )
                }
            </div>
        </>
    )
}
export default Articulo;