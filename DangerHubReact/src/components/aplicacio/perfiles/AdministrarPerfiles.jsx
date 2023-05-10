import React, { useState, useEffect } from 'react'
import mainLogo from'/imagenes/DANGERHubLOGO.png';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../../../userContext';
import { useDispatch, useSelector } from "react-redux";
import { getPerfiles } from "../../../slices/perfiles/thunks";
import { PerfilGridEditar } from './PerfilGridEditar';

export const AdministrarPerfiles = () => {

    let { authToken,setAuthToken } = useContext(UserContext);
    let [ user,setUser ] = useState('');
    
    const { perfiles = [], isLoading=true, error="" } = useSelector((state) => state.perfiles);

    

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPerfiles(authToken));
    }, [])

  return (
    <>
    <div className="home-container">
        <div className="home-header">  
            <Link to="/home"><img src={mainLogo} alt="" className="home-header-logo"/></Link>
        </div>

        <div className="home-content">
            <div className="home-titulo">
                <h1>Administrar perfiles</h1>
            </div>

            <div className="home-perfil">

               {isLoading ? "Espera..." : <>{perfiles.map((v) => {
                    return (
            
                      <>
                      { <PerfilGridEditar key={v.id_perfil} v={v}/>}
                        
                      </>
                      )
                  })}</>}

                <div className="home-perfil-users ">
                    <Link to="/perfilesAdd"><div className="home-perfil-foto add-perfil"></div></Link>
                    <div className="home-perfil-name">
                        <p>Añadir perfil</p>
                    </div>
                </div>

                
            </div>
            
            <div className="home-perfil-config">
                <Link to="/perfiles"><div className="home-perfil-config-button">Listo</div></Link>
            </div>
        </div>
    </div>
</>
  )
}