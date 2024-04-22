import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Logo from '../assets/Logoo.png'
// Rutas
import Principal from './Principal/Principal'
import Menú from "./Menu/Menú";
import Perfil from './Perfil/Perfil'
import Carrito from "./Carrito/Carrito";
import './Nav.css';

import productos from './Menu/productos'; // Ruta correcta al archivo productosData

const BarraNav = () => {
    return (
        <BrowserRouter>
            <header>
                <nav className="navbar border-bottom border-body" data-bs-theme="dark" id="Nav">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={Logo} alt="Logo" width="36" height="auto" className="d-inline-block align-text-top"></img>
                        </a>
                        <a id="Nombre"> CAFÉ MAGNIFIQUE</a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            {/* ------------------------LINKS DEL NAVBAR---------------------*/}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to='/'>Inicio </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to='/menu'>Menú </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to='/carrito'>Carrito </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to='/perfil'>Perfil </Link>
                                </li>
                            </ul>
                            {/* ------------------------LINKS DEL NAVBAR---------------------*/}
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"></input>
                                <button className="btn btn-outline-light" type="submit">Buscar</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
            <Routes>
                <Route path='/' element={<Principal />} />
                <Route path='/menu' element={<Menú productos={productos} />} />
                <Route path='/carrito' element={<Carrito />} />
                <Route path='/perfil' element={<Perfil />} />
            </Routes>
        </BrowserRouter>
    );
}

export default BarraNav;
