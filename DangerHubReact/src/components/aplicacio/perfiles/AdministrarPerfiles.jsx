import React, { useState, useEffect } from 'react'
import mainLogo from'/imagenes/DANGERHubLOGO.png';
import loading from'/videos/loading.mp4';
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
    <div className="perfiles-container">
        <div className="perfiles-header">  
            <Link to="/perfiles"><img src={mainLogo} alt="" className="perfiles-header-logo"/></Link>
        </div>

        <div className="perfiles-content">
            <div className="perfiles-titulo">
                <h1>Administrar perfiles</h1>
            </div>

            <div className="perfiles-perfil">
                
                {isLoading ?  <div className="perfiles-perfil-users "><video autoPlay muted loop className="perfiles-perfil-loading" src={loading}></video></div> : <>{perfiles.map((v) => {
                    return (
                    <>
                        <PerfilGridEditar key={v.id_perfil} v={v}  {...v}/>
                    </>
                    )
                })}</>}

                {isLoading ? <div></div> : 

                    <>
                        <div className="perfiles-perfil-users ">
                            <Link to="/perfilesAdd"><div className="perfiles-perfil-foto add-perfil"></div></Link>
                            <div className="perfiles-perfil-name">
                                <p>Añadir perfil</p>
                            </div>
                        </div>
                    </>
                }

                
            </div>
            
            <div className="perfiles-perfil-config">
                <Link to="/perfiles"><div className="perfiles-perfil-config-button">Listo</div></Link>
            </div>
        </div>
    </div>
</>
  )
}