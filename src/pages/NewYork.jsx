// Router
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



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
        border: "1px solid #ddd", // Bordes suaves
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(71, 71, 71, 0.35)", // Sombras suaves
        padding: "15px",
        backgroundColor: "#fff", // Fondo blanco
        textAlign: "center",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", // Fuente de Apple
    };

    const TituloCard = {
        textAlign: "center",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", // Fuente de Apple
        fontSize: "19px",
        fontWeight: "bold",
        textDecoration : 'none',
        color : 'Black'
    }

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


    if (!data) {
        return <p>Cargando noticias...</p>;
    }


    const noticiasFiltradas = data ? data.filter((noticia) => noticia.section === section) : data;



    return (
        <>
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


            <div style={BorderStyle}></div>


            <div className="gridNoticias" style={GridStyle}>
                {noticiasFiltradas.length === 0 ? (
                    data.map((noticia) => (
                        <div key={noticia.id} style={CardStyle}>
                            <Link to={`/Articulo/${noticia.id}`} style={TituloCard}>{noticia.headline}</Link>
                            <p>{noticia.body.slice(1, 360)}...</p>
                        </div>
                    ))
                ) : (
                    noticiasFiltradas.map((noticia) => (
                        <div key={noticia.id} style={CardStyle}>
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