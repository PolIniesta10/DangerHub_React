import React from 'react'
import mainLogo from'/imagenes/DANGERHubLOGO.png';
import DHUB from'/imagenes/DHUB.png';
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../../../userContext";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const ContenidosAdd = () => {

    const [urlAvatar, setUrlAvatar] = useState("");

    useEffect(() => {
      if (urlAvatar) {
        setValue("url_avatar", urlAvatar);
      }
    }, [urlAvatar]);
  
    const handleUrlAvatarChange = (event) => {
      setUrlAvatar(event.target.value);
    };

  return (
    <>
    <div className="perfiles-container">
        <div className="perfiles-header">  
            <Link to="/perfiles"><img src={mainLogo} alt="" className="perfiles-header-logo"/></Link>
        </div>

        <div className="perfiles-content">
            <div className="perfilesAdd-titulo">
                <h1>Añadir contenido</h1>
                <p>Añade contenido de terror para que otras personas puedan ver en DangerHub.</p>
            </div>

            <div className="perfilesAdd-perfil-users">
                <form action="">
                    <div className="perfilesAdd-perfil-foto">
                    <img className="perfiles-perfil-img" src={urlAvatar||DHUB} alt=""  />
                    </div>
                    <div className="perfilesAdd-perfil-inputs-box">
                        
                        <fieldset className="contentAdd-perfil-input">
                            <legend>Select a maintenance drone:</legend>    

                            <div>
                                <input type="radio" id="Pelicula" name="drone" value="1" checked/>
                                <label for="huey">Pelicula</label>
                            
                                <input type="radio" id="Serie" name="drone" value="2"/>
                                <label for="dewey">Serie</label>
                            
                                <input type="radio" id="Contenido" name="drone" value="3"/>
                                <label for="louie">Contenido</label>
                            </div>
                        </fieldset>
                        
                        <div className="perfilesAdd-perfil-input">
                            <input type="text" name="nombre"
                            placeholder='Profile name' id="nombre" minLength="2" maxLength="20"/>
                        </div>

                        <div className="perfilesAdd-perfil-input">
                            <input type="url" name="url_avatar"
                            placeholder='URL de la imagen ( Por defecto es el logo de DangeHub )' id="url_avatar" onChange={handleUrlAvatarChange} value={urlAvatar} />
                        </div>
                        
                        <div className="perfilesAdd-perfil-input">
                            <input type="text" name="nombre"
                            placeholder='Profile name' id="nombre" minLength="2" maxLength="20"/>
                        </div>

                        <div className="perfilesAdd-perfil-input">
                            <input type="url" name="url_avatar"
                            placeholder='URL de la imagen ( Por defecto es el logo de DangeHub )' id="url_avatar" onChange={handleUrlAvatarChange} value={urlAvatar} />
                        </div>
                        
                        <div className="perfilesAdd-perfil-input">
                            <input type="text" name="nombre"
                            placeholder='Profile name' id="nombre" minLength="2" maxLength="20"/>
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
  