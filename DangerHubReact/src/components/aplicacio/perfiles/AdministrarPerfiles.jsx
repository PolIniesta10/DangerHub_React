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
    let [ userId,setUserId ] = useState('');
    
    const { perfiles = [], isLoading=true, error="" } = useSelector((state) => state.perfiles);

    const obtUser = async () => {
        try{
            const data = await fetch("http://127.0.0.1:8000/api/user", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer '  + authToken
            },
            method: "GET",
            })
            const resposta = await data.json();
            if (resposta.success === true) {
                console.log(resposta.user);
                setUser(resposta.user.name);
                setUserId(resposta.user.id);
            }
            else {
                console.log("error");
            }
        }
        catch {
        console.log(data);
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
                      { v.id_usuario == userId ? (<PerfilGridEditar key={v.id_perfil} v={v}/>) : <></> }
                        
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