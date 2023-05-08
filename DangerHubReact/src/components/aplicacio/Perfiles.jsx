import React, { useState, useEffect } from 'react'
import mainLogo from'/imagenes/DANGERHubLOGO.png';
import { Link } from "react-router-dom";
import { PerfilGrid } from './PerfilGrid';
import { useContext } from 'react';
import { UserContext } from '../../userContext';
import { useDispatch, useSelector } from "react-redux";

export const Perfiles = () => {
    
    let { authToken,setAuthToken } = useContext(UserContext);
    let [ user,setUser ] = useState('');
    let [ userId,setUserId ] = useState('');
    let [ perfiles, setPerfiles ] = useState({});
    const { posts = [], page=0, isLoading=true, error="", filter } = useSelector((state) => state.peliculas);
    // let [ roles, setRoles] = useState([]);

    
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
    
    useEffect(() => {
        obtUser();
        obtPerfilUsuari();
    }, [])
    const obtPerfilUsuari = async () => {
        try{
            const data = await fetch("http://127.0.0.1:8000/api/perfiles/" + userId, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer '  + authToken
            },
            method: "GET",
            })
            const resposta = await data.json();
            if (resposta.success === true) {
                console.log(resposta.data);
                setPerfiles(resposta.data);
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
  return (
    <>
    <div className="home-container">
        <div className="home-header">  
            <Link to="/home"><img src={mainLogo} alt="" className="home-header-logo"/></Link>
        </div>

        <div className="home-content">
            <div className="home-titulo">
                <h1>¿Quién eres? Elige tu perfil</h1>
            </div>

            <div className="home-perfil">
            {isLoading ? "Espera..." : <>{perfiles.map((v) => {
                    return (
            
                      <>
                      { v.id_usuario == userId ? (<PerfilGrid key={v.id_perfil} v={v}/>) : <></> }
                        
                      </>
                      )
                  })}</>}
                

                <div className="home-perfil-users">
                    <div className="home-perfil-foto">
                        <img className="home-perfil-img" src="https://highxtar.com/wp-content/uploads/2022/09/highxtar-este-es-el-icono-de-perfil-de-netflix-mas-utilizado-destacada.jpg" alt="" />
                    </div>
                    <div className="home-perfil-name">
                        <p>Oscaaar</p>
                    </div>
                </div>

                <div className="home-perfil-users">
                    <div className="home-perfil-foto">
                        <img className="home-perfil-img" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
                    </div>
                    <div className="home-perfil-name">
                        <p>Luciano</p>
                    </div>
                </div>

                <div className="home-perfil-users">
                    <div className="home-perfil-foto">
                        <img className="home-perfil-img" src="https://ih1.redbubble.net/image.618410788.2644/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg" alt=""/>
                    </div>
                    <div className="home-perfil-name">
                        <p>JP</p>
                    </div>
                </div>
            </div>
            
            <div className="home-perfil-config">
                <Link to="/administrarPerfiles"><div className="home-perfil-config-button">Administrar perfiles</div></Link>
            </div>
        </div>
    </div>
</>
  )
}