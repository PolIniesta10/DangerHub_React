import React from 'react'
import mainLogo from'/imagenes/DANGERHubLOGO.png';
import DHUB from'/imagenes/DHUB.png';
import loading from'/videos/loading.mp4';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import { UserContext } from '../../../userContext';
import { getPerfil, editPerfil, delPerfil } from '../../../slices/perfiles/thunks';

export const PerfilesEdit = () => {

  const { usuari, email, setUsuari, authToken, setAuthToken } = useContext(UserContext);
  const { perfil, page=0, error="", isLoading=true } = useSelector((state) => state.perfiles);
  const dispatch = useDispatch();
  const { id } = useParams();

  let [ formulari, setFormulari] = useState({
    nombre: '',
    url_avatar: '',
  });

  const handleChange = (e)=> {
    e.preventDefault();
    
    setFormulari({
    ...formulari,
    [e.target.name] : e.target.value
    })
    
  }

  const handleUrlChange = (e) => {
    setFormulari({
      ...formulari,
      url_avatar: e.target.value
    });
  };

  useEffect(() => {
    dispatch(getPerfil(id, authToken));      
  }, []) 

  useEffect(() => {
    setFormulari({
      nombre: perfil.nombre,
      url_avatar: perfil.url_avatar,
    })
  }, [perfil]) 


  return (
    <>  
    <div className="perfiles-container">
        <div className="perfiles-header">  
            <Link to="/perfiles"><img src={mainLogo} alt="" className="perfiles-header-logo"/></Link>
        </div>

        <div className="perfiles-content">
            <div className="perfilesAdd-titulo">
                <h1>Editar perfil</h1>
                <p>Edita un perfil ya creado a tu manera.</p>
            </div>

            <div className="perfilesAdd-perfil-users">
              {isLoading ? <video autoPlay muted loop className="perfiles-perfil-loading" src={loading}></video> : 
                <>
                  <form action="">
                      <div className="perfilesAdd-perfil-foto">
                        <img key={formulari.url_avatar} className="perfiles-perfil-img" src={formulari.url_avatar ? formulari.url_avatar : DHUB} alt=""/>
                      </div>
                      <div className="perfilesAdd-perfil-inputs-box">

                        {perfil &&
                          <>
                            <div className="perfilesAdd-perfil-input">
                                <input onChange={handleChange} onBlur={handleUrlChange} type="url" name="url_avatar" value= { formulari.url_avatar } placeholder='URL de la imagen ( Por defecto es el logo de DangeHub )' id="url_avatar" />
                            </div>
                            <div className="perfilesAdd-perfil-input">
                                <input onChange={ handleChange} type="text" name="nombre" value= { formulari.nombre } placeholder='Nombre del perfil' id="nombre"  minLength="2" maxLength="20" required/>
                            </div>
                          </>
                        }

                      </div>
                  </form>
                </>
              }
            </div>
            
            <div className="perfilesAdd-perfil-config">
              { error ? (<div className="flex w-full items-center space-x-2 rounded-2xl bg-red-50 mb-4 px-4 ring-2 ring-red-200 ">{error}</div>) : (<></>)  }
              <button  onClick={(e) => dispatch( editPerfil(formulari, authToken, perfil)) } type="submit" className="perfilesAdd-perfil-config-button confirm-button">Continuar</button>
              <Link to="/administrarPerfiles"><button type="submit" className="perfilesAdd-perfil-config-button">Cancelar</button></Link>
              <Link to="/administrarPerfiles"><button onClick={(e) => dispatch( delPerfil(perfil, authToken)) } type="submit" className="perfilesAdd-perfil-config-button">Eliminar perfil</button></Link>
            </div>
        </div>
      </div>
    </>
    )
  }
