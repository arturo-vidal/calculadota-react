import React from "react";
import '../hojas-de-estilos/Boton-clear.css';

const Botonclear=(props)=>(
  <div className='botonclear' onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default Botonclear;