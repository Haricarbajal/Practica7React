import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/NewYork';
import About from './pages/About';
import Articulo from './pages/Articulo';
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';
import { useState } from 'react';

function Router() {
    //const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem("isAuthenticated") === "true"
    );

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Register" element={<Register />} />
                <Route path="/Login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                <Route
                    path="/"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route path="/about" element={<About />} />
                <Route path="/Section/:section" element={<Home />} />
                <Route path="/Articulo/:idNoticia" element={<Articulo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
