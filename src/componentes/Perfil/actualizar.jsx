import React, { useState, useRef } from 'react';
import { actualizar } from '../../firebase/crud';
import Login from './assets/login-icon.svg';
import Username from './assets/username-icon.svg';
import Password from './assets/password-icon.svg';

const ActualizarUsuario = () => {
    const inputRefId = useRef(null);
    const inputRefNombre = useRef(null);
    const inputRefContraseña = useRef(null);

    const [usuario, setUsuario] = useState({
        Nombre: '',
        Contraseña: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({
            ...usuario,
            [name]: value
        });
    };

    const handleActualizar = async () => {
        const id = inputRefId.current.value;
        await actualizar(id, usuario.Nombre, usuario.Contraseña);
    };

    return (
        <div className="col-md-6 d-flex justify-content-center align-items-center vh-100">
            <div className="p-5 rounded-5 text-secondary shadow" style={{ maxWidth: '25rem', width: '90%', background:'#AEAB9D' }}>
                <div className="d-flex justify-content-center">
                    <img src={Login} alt="login-icon" style={{ height: '7rem' }} />
                </div>
                <div className="text-center fs-1 fw-bold">Actualizar</div>
                <div className="input-group mt-4">
                    <div className="input-group-text bg-success">
                        <img src={Username} alt="username-icon" style={{ height: '1rem' }} />
                    </div>
                    <input
                        className="form-control bg-light"
                        type="text"
                        placeholder="ID del documento"
                        ref={inputRefId}
                    />
                </div>
                <div className="input-group mt-1">
                    <div className="input-group-text bg-success">
                        <img src={Username} alt="username-icon" style={{ height: '1rem' }} />
                    </div>
                    <input
                        className="form-control bg-light"
                        type="text"
                        placeholder="Nombre"
                        name="Nombre"
                        ref={inputRefNombre}
                        value={usuario.Nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group mt-1">
                    <div className="input-group-text bg-success">
                        <img src={Password} alt="password-icon" style={{ height: '1rem' }} />
                    </div>
                    <input
                        className="form-control bg-light"
                        type="password"
                        placeholder="Contraseña"
                        name="Contraseña"
                        ref={inputRefContraseña}
                        value={usuario.Contraseña}
                        onChange={handleChange}
                    />
                </div>
                <button
                    className="btn btn-success text-white w-100 mt-4 fw-semibold shadow-sm"
                    onClick={handleActualizar}
                >
                    Actualizar datos
                </button>
            </div>
        </div>
    );
};

export default ActualizarUsuario;
