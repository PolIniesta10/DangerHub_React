import React, { useState, useEffect } from 'react';
import mainLogo from'/imagenes/DANGERHubLOGO.png';
import loading from'/videos/loading.mp4';
import { Link } from "react-router-dom";
import { PerfilGrid } from './PerfilGrid';
import { useContext } from 'react';
import { UserContext } from '../../../userContext';
import { useDispatch, useSelector } from "react-redux";
import { getPerfiles } from "../../../slices/perfiles/thunks";

export const Perfiles = () => {
    
    let { authToken,setAuthToken } = useContext(UserContext);
    let [ user,setUser ] = useState('');
    let [ userId,setUserId ] = useState('');
    
    const { perfiles = [], isLoading=true, error="" } = useSelector((state) => state.perfiles);

    const obtUser = async () => {
        try{
            const data = await fetch("http://equip09.insjoaquimmir.cat/api/user", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer '  + authToken
            },
            method: "GET",
            })
            const resposta = await data.json();
            if (resposta.success === true) {
                setUser(resposta.user.name);
                setUserId(resposta.user.id);
            }
        }
        catch {
        alert("Catch");
        }
    };

    const dispatch = useDispatch();
    useEffect(() => {
        obtUser();
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
                <h1>¿Quién eres? Elige tu perfil</h1>
            </div>

            <div className="perfiles-perfil">
                
                {isLoading ?  <div className="perfiles-perfil-users "><video autoPlay muted loop className="perfiles-perfil-loading" src={loading}></video></div> : <>{perfiles.map((v) => {
                    return (
                    <>
                        { v.id_usuario == userId ? (<PerfilGrid key={v.id_perfil} v={v}  {...v}/>) : <></> }
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

            {isLoading ? <div></div> : 

                <>
                    <div className="perfiles-perfil-config">
                        <Link to="/administrarPerfiles"><div className="perfiles-perfil-config-button">Administrar perfiles</div></Link>
                    </div>
                </>
            }
            
        </div>
    </div>
</>
  )
}