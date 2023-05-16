import React, { useState, useEffect } from 'react';
import LogoDangerHub from'/imagenes/LogoDangerHub.png';
import { Link } from "react-router-dom";

export const Welcome = () => {

  return (
    <>
    <div className="welcome_container"></div>
    <div className="welcome_triangulo"></div>
    <div className="welcome_box">
        <div className="welcome_header">  
            <img src={LogoDangerHub} alt="" className="welcome_header_logo"/>
        </div>
        <div className="welcome_contenido">  
            <h1>¿QUÉ ÉS LO SIGUIENTE?</h1>
            <p>Contenido de terror donde y cuando quieras.</p>

            <div className="welcome_buttons">
                <Link to="/login"><button>Inicia sesión</button></Link>
                <Link to="/register"><button>Registra-te ahora</button></Link>
            </div>
        </div>

    </div>
</>
  )
}