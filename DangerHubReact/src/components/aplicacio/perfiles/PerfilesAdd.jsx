import React from 'react'
import mainLogo from'/imagenes/DANGERHubLOGO.png';
import DHUB from'/imagenes/DHUB.png';
import { Link } from "react-router-dom";

export const PerfilesAdd = () => {

  return (
    <>
    <div className="perfiles-container">
        <div className="perfiles-header">  
            <Link to="/perfiles"><img src={mainLogo} alt="" className="perfiles-header-logo"/></Link>
        </div>

        <div className="perfiles-content">
            <div className="perfilesAdd-titulo">
                <h1>Añadir perfil</h1>
                <p>Añade un perfil para que otra persona pueda ver DangerHub.</p>
            </div>

            <div className="perfilesAdd-perfil-users">
                <form action="">
                    <div className="perfilesAdd-perfil-foto">
                        <img className="perfiles-perfil-img" src={DHUB} alt=""/>
                    </div>
                    <div className="perfilesAdd-perfil-inputs-box">
                        <div className="perfilesAdd-perfil-input">
                            <input type="url" name="url_avatar" placeholder='URL de la imagen ( Por defecto es el logo de DangeHub )' id="url_avatar"/>
                        </div>
                        <div className="perfilesAdd-perfil-input">
                            <input type="text" name="nombre" placeholder='Profile name' id="nombre" minLength="2" maxLength="20" required/>
                        </div>
                    </div>
                </form>
            </div>
            
            <div className="perfilesAdd-perfil-config">
                <Link to="/home"><button type="submit" className="perfilesAdd-perfil-config-button confirm-button">Continuar</button></Link>
                <Link to="/administrarPerfiles"><button type="submit" className="perfilesAdd-perfil-config-button">Cancelar</button></Link>
            </div>
        </div>
    </div>
</>
  )
}