import React from 'react'
import mainLogo from'/imagenes/DANGERHubLOGO.png';
import { Link } from "react-router-dom";

export const PerfilesAdd = () => {
  return (
    <>
    <div className="home-container">
        <div className="home-header">  
            <Link to="/home"><img src={mainLogo} alt="" className="home-header-logo"/></Link>
        </div>

        <div className="home-content">
            <div className="perfilesAdd-titulo">
                <h1>Añadir perfil</h1>
                <p>Añade un perfil para que otra persona pueda ver DangerHub.</p>
            </div>

            <div className="perfilesAdd-perfil-users">
                <div className="home-perfil-foto">
                    <img className="home-perfil-img" src="https://ih1.redbubble.net/image.618387024.1713/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt=""/>
                </div>
                <div className="perfilesAdd-perfil-name">
                    <p>Pol Iniesta</p>
                </div>
            </div>
            
            <div className="perfilesAdd-perfil-config">
                <Link to="/home"><div className="perfilesAdd-perfil-config-button">Continuar</div></Link>
                <Link to="/administrarPerfiles"><div className="perfilesAdd-perfil-config-button">Cancelar</div></Link>
            </div>
        </div>
    </div>
</>
  )
}