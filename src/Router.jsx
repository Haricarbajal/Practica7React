import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/NewYork';
import About from './pages/About';
import Articulo from './pages/Articulo';

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>}/>
                {/* los dos puntos : , hacen que la ruta puda variar y no sea una fija */}
                <Route path='/Section/:section' element={<Home/>}/>
                <Route path='/Articulo/:idNoticia' element={<Articulo/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router ;