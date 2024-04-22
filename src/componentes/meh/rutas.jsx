import { BrowserRouter,Link, Route, Routes } from "react-router-dom";
import Contacto from "../Contacto";
import Inicio from "./inicio";
import Nosotros from "../nosotros";
import './styles.css'


const Rutas=() =>{
    return(
        <BrowserRouter>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link style={{textDecoration:'none', color:'red' }} to='/' >Inicio </Link> 
                    </li>
                    <li>
                        <Link style={{textDecoration:'none', color:'red' }} to='/contacto' >Contacto </Link> 
                    </li>
                    <li>
                        <Link style={{textDecoration:'none', color:'red' }} to='/nosotros' >Nosotros </Link> 
                    </li>
                </ul>
            </nav>
        </header>
        <hr/>
        <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        </Routes>
    </BrowserRouter>
    );
}

export default Rutas;