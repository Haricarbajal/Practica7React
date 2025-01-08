import { Link } from "react-router-dom";

function About(){
    return(
        <>
            <h1>
                hola, Contactate con nosotros
            </h1>

            <nav>
                <Link to={"/"}>Inicio</Link>
                <Link to={"/about"}>About</Link>
            </nav>  
        </>
    );
}

export default About