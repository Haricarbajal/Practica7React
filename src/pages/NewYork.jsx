// Router
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
// import { useContext } from "react";
// import { textoContext } from "./provider";
import { useContext } from "react";
import { languageContext } from "./ProviderLanguage";


function NewYork() {


    const Menu = {
        display: "flex",               // Activamos flexbox
        justifyContent: "space-between", // Distribuye los elementos: izquierda, centro, derecha
        alignItems: "center",          // Asegura la alineación vertical
        position: "relative",          // Para ajustar posiciones si es necesario
        paddingTop: "10px",  // Centra horizontalmente el contenedor de idiomas
        paddingLeft: "20%",
        paddingRight: "20%",
        marginTop: '20px',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", // Fuente de Apple
    };

    const BorderStyle = {
        display: "flex",               // Activamos flexbox
        justifyContent: "space-between", // Distribuye los elementos: izquierda, centro, derecha
        alignItems: "center",          // Asegura la alineación vertical
        position: "relative",          // Para ajustar posiciones si es necesario
        paddingTop: "10px",  // Centra horizontalmente el contenedor de idiomas
        paddingLeft: "20%",
        paddingRight: "20%",
        borderBottom: '4px double black', // Aplica el borde inferior
        marginTop: '20px',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", // Fuente de Apple
    };

    const tituloStyle = {
        // fontFamily: "'Times New Roman', Times, serif", // Usa la fuente Times New Roman como base y se puede ajustar según se requiera.
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", // Fuente de Apple
        fontSize: "36px",           // Tamaño de fuente grande para el título
        fontWeight: "bold",         // Fuente en negrita
        color: "#000",              // Color del texto (ajustar al tema de tu diseño)
        textAlign: "center",        // Centra el texto
        marginBottom: "20px",        // Espaciado inferior para el título
    };

    const titulo = {
        display: "flex",               // Activamos flexbox
        justifyContent: "space-between", // Distribuye los elementos: izquierda, centro, derecha
        alignItems: "center",          // Asegura la alineación vertical
        position: "relative",          // Para ajustar posiciones si es necesario
        padding: "10px",               // Espaciado interno opcional
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", // Fuente de Apple
    };

    const lupa = {
        flex: "0 0 auto",              // Evita que se estire o encoja
    };

    const baStyle = {
        flex: "0 0 auto",              // Evita que se estire o encoja
    };

    const GridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // 3 columnas con ancho flexible
        gap: "60px", // Espaciado entre los elementos
        padding: '100px'
        // paddingTop: '10%',
        // paddingLeft: '15%',
        // paddingRight: '15%',
    };

    const CardStyle = {
        display: "flex",               // Activamos flexbox
        flexDirection: "column",       // Coloca los elementos en columna (imagen arriba, texto abajo)
        justifyContent: "space-between", // Distribuye los elementos para asegurar que haya espacio entre ellos
        border: "1px solid #ddd",      // Bordes suaves
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(71, 71, 71, 0.35)", // Sombras suaves
        padding: "15px",
        backgroundColor: "#fff",       // Fondo blanco
        textAlign: "center",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", // Fuente de Apple
        height: "auto",                 // Asegura que la altura se ajuste automáticamente al contenido
    };

    const TituloCard = {
        textAlign: "center",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", // Fuente de Apple
        fontSize: "19px",
        fontWeight: "bold",
        textDecoration: 'none',
        color: 'Black'
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

    const contenedorLanguages = {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: '20px'
    };

    const imagenStyle = {
        width: '100%',           // Ajusta el tamaño de la imagen al 100% del contenedor
        maxWidth: '600px',       // Limita el ancho máximo de la imagen a 600px
        height: '323px',         // Mantén la altura que tienes definida
        objectFit: 'cover',      // Mantiene la proporción de la imagen sin distorsionarla
        borderRadius: '8px',     // Bordes redondeados
        margin: '0 auto',        // Centra la imagen horizontalmente
        display: 'block',        // Asegura que la imagen sea un bloque para que el margin funcione
    };

    const { section } = useParams();
    const [data, setData] = useState(null);


    console.log(section)
    console.log(data)


    useEffect(() => {
        fetch("https://news-foniuhqsba-uc.a.run.app/")
            .then((response) => response.json())
            .then((data) => setData(data))
    }, []);

    console.log("estado despues del fetch:  ", data)

    // if (!data) {
    //     return <p>Cargando noticias...</p>;
    // }

    const noticiasFiltradas = data ? data.filter((noticia) => noticia.section === section) : [];
    // const {texto, changeTexto} = useContext(textoContext);

    // if(texto === null){
    //     return <p>cargando</p>;
    // }

    // console.log('este es el texot',texto)
    const { language, changeLanguage } = useContext(languageContext);

    const dialogRef = useRef(null);

    const openDialog = () => {
        dialogRef.current?.showModal();
    };

    const closeDialog = () => {
        dialogRef.current?.close();
    };
    if (language === null) {
        return <p>esperando language</p>
    }

    function logOut(){
        localStorage.removeItem("isAuthenticated")
    }


    return (
        <>

            <button onClick={() => logOut()}>LogOut</button>

            <div style={contenedorLanguages}>
                <button style={botonLanguage} onClick={() => changeLanguage('es')}>Español</button>
                <button style={botonLanguage} onClick={() => changeLanguage('fr')}>Frances</button>
                <button style={botonLanguage} onClick={() => changeLanguage('pt')}>Portugues</button>
                <button style={botonLanguage} onClick={() => changeLanguage('it')}>Italiano</button>
                <button style={botonLanguage} onClick={() => changeLanguage('ch')}>Chino</button>
            </div>

            <div style={titulo}>
                <button onClick={openDialog} style={{ all: "unset", cursor: "pointer", fontSize: "1.5rem" }}>
                    🔎
                </button>
                <h1 style={tituloStyle}>The New York Time</h1>
                <h1 style={baStyle}></h1>
            </div>
            <dialog ref={dialogRef}>
                <p>Esto es un diálogo nativo</p>
                <button onClick={closeDialog}>Cerrar</button>
            </dialog>
            <div style={Menu}>
                <Link to={"/"} style={{ all: 'unset' }}>Inicio</Link>
                <Link to={"/about"} style={{ all: 'unset' }}>About</Link>
                <Link to={"/Section/Sport"} style={{ all: 'unset' }}>Sport</Link>
                <Link to={"/Section/Finance"} style={{ all: 'unset' }}>Finance</Link>
                <Link to={"/Section/World News"} style={{ all: 'unset' }}>WorldNews</Link>
                <Link to={"/Section/Technology"} style={{ all: 'unset' }}>Technology</Link>
                <Link to={"/Section/Entertainment"} style={{ ...CardStyle, all: 'unset' }}>Entertainment</Link>
            </div>


            <div style={BorderStyle}></div>


            <div className="gridNoticias" style={GridStyle}>
                {noticiasFiltradas.length === 0 ? (
                    (data || []).map((noticia) => (
                        <div key={noticia.id} style={CardStyle}>
                            <img src={noticia.image_url} style={imagenStyle} alt="" />
                            <Link to={`/Articulo/${noticia.id}`} style={TituloCard}>{noticia.translations[language].abstract}</Link>
                            <p>{noticia.body.slice(1, 360)}...</p>
                        </div>
                    ))
                ) : (
                    noticiasFiltradas.map((noticia) => (
                        <div key={noticia.id} style={CardStyle}>
                            <img src={noticia.image_url} style={imagenStyle} alt="" />
                            <Link to={`/Articulo/${noticia.id}`} style={TituloCard}>{noticia.headline}</Link>
                            <p>{noticia.body.slice(1, 360)}...</p>
                        </div>
                    ))
                )
                }
            </div>
        </>
    );
}
export default NewYork;