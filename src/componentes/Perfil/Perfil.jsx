
import React from 'react';
import ActualizarUsuario from './actualizar';
import FormularioRegistro from './registrar';

const Perfil = () => {
  return(
    <div className='row'>
    <FormularioRegistro/>
    <ActualizarUsuario/>
  </div>
  );
}

export default Perfil;
