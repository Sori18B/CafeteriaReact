
import React, { useState } from 'react';
import { guardar } from '../../firebase/crud';
import Login from './assets/login-icon.svg';
import Username from './assets/username-icon.svg';
import Password from './assets/password-icon.svg';



const FormularioRegistro = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [alerta, setAlerta] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await guardar(nombre, edad, correo, contraseña);
    setNombre('');
    setEdad('');
    setCorreo('');
    setContraseña('');
    setAlerta(true);
  };

  return (
        <div className="col-md-6 d-flex justify-content-center align-items-center vh-100">
            <div className="p-5 rounded-5 text-secondary shadow" style={{ maxWidth: '25rem', width: '90%', background:'#AEAB9D' }}>
                {alerta && <div className="alert alert-dark mt-3" role="alert"><strong>Aviso</strong> Datos guardados con éxito</div>}
                <div className="d-flex justify-content-center">
                    <img src={Login} alt="login-icon" style={{ height: '7rem' }} />
                </div>
                <div className="text-center fs-1 fw-bold">Registrarse</div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group mt-4">
                        <div className="input-group-text bg-success">
                            <img src={Username} alt="username-icon" style={{ height: '1rem' }} />
                        </div>
                        <input className="form-control bg-light" type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div className="input-group mt-1">
                        <div className="input-group-text bg-success">
                            <img src={Username} alt="username-icon" style={{ height: '1rem' }} />
                        </div>
                        <input className="form-control bg-light" type="text" placeholder="Edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
                    </div>
                    <div className="input-group mt-1">
                        <div className="input-group-text bg-success">
                            <img src={Username} alt="username-icon" style={{ height: '1rem' }} />
                        </div>
                        <input className="form-control bg-light" type="text" placeholder="Correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                    </div>
                    <div className="input-group mt-1">
                        <div className="input-group-text bg-success">
                            <img src={Password} alt="password-icon" style={{ height: '1rem' }} />
                        </div>
                        <input className="form-control bg-light" type="password" placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success text-white w-100 mt-4 fw-semibold shadow-sm">Registrar cuenta</button>
                </form>
            </div>
        </div>
);
}

export default FormularioRegistro;
