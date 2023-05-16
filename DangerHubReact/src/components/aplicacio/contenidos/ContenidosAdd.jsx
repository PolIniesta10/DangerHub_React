import React from 'react'
import mainLogo from'/imagenes/DANGERHubLOGO.png';
import DHUB from'/imagenes/DHUB.png';
import { Link, useParams, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../../../userContext";
import { useContext, useEffect, useState } from "react";
import { addContenido } from '../../../slices/peliculas/thunks';

export const ContenidosAdd = () => {

    const [urlAvatar, setUrlAvatar] = useState("");
    const [fechaHoy, setFechaHoy] = useState(new Date());
    const hoy = fechaHoy.toISOString().slice(0, 10);
    const { authToken } = useContext(UserContext);
    const [tipoContenido, setTipoContenido] = useState("1"); 
    const { handleSubmit, setValue } = useForm();    
    useEffect(() => {
      if (urlAvatar) {
        setValue("url_avatar", urlAvatar);
      }
    }, [urlAvatar]);
  
    const handleUrlAvatarChange = (event) => {
      setUrlAvatar(event.target.value);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const afegir = (data) => {
        const data2 = {
            ...data,
            titulo: data.titulo,
            descripcion: data.descripcion,
            descripcionLarga: data.descripcionLarga,
            url_imagen: data.url_imagen,
            url_video: data.url_video,
            duracion: data.duracion,
            fecha_lanzamiento: data.fecha_lanzamiento,
            id_categoria: tipoContenido,
        };
        console.log(data2);
        dispatch(addContenido(data2, authToken));
        navigate('/home');
    };

  return (
    <>
    <div className="perfiles-container">
        <div className="perfiles-header">
            <Link to="/perfiles"><img src={mainLogo} alt="" className="perfiles-header-logo"/></Link>
        </div>

        <div className="perfiles-content">
            <div className="perfilesAdd-titulo"  style={{width:"65%",}}>
                <h1>Añadir contenido</h1>
                <p>Añade contenido de terror para que otras personas puedan ver en DangerHub.</p>
            </div>

            <div className="perfilesAdd-perfil-users"  style={{width:"65%",}}>
                <form action="">
                    <div className="perfilesAdd-perfil-foto">
                    <img className="perfiles-perfil-img" src={urlAvatar||DHUB} alt=""  />
                    </div>
                    <div className="perfilesAdd-perfil-inputs-box">
                        
                        <fieldset className="contentAdd-perfil-input">
                            <legend>Tipo de contenido: </legend>    

                            <div>
                                <input type="radio" id="Pelicula" name="Contenido" value="1" checked={tipoContenido === "1"} onChange={() => setTipoContenido("1")}/>
                                <label htmlFor="Pelicula">Pelicula</label>
                            
                                <input type="radio" id="Serie" name="Contenido" value="2" checked={tipoContenido === "2"} onChange={() => setTipoContenido("2")}/>
                                <label htmlFor="Serie">Serie</label>
                            
                                <input type="radio" id="Documental" name="Contenido" value="3" checked={tipoContenido === "3"} onChange={() => setTipoContenido("3")}/>
                                <label htmlFor="Documental">Documental</label>
                            </div>
                        </fieldset>
                        
                        <div className="contentAdd-perfil-input">
                            <input type="text" name="titulo" id="titulo"
                            placeholder='Nombre del contenido' minLength="2" maxLength="20" ref={register}/>
                        </div>

                        <div className="contentAdd-perfil-input">
                            <input name="descripcion" id="descripcion" placeholder="Descripcion corta del contenido" ref={register}></input>
                        </div>
                        <div className="contentAdd-perfil-input">
                            <textarea name="descripcionLarga" id="descripcionLarga" placeholder="Descripcion larga del contenido" ref={register}></textarea>
                        </div>

                        <div className="contentAdd-perfil-input">
                            <input type="url" name="url_avatar"
                            placeholder='URL de la imagen ( Por defecto es el logo de DangeHub )' id="url_avatar" onChange={handleUrlAvatarChange} value={urlAvatar} />
                        </div>

                        <div className="contentAdd-perfil-input">
                            <input type="url" name="url_video"
                            placeholder='URL del video ( Etiqueta "src" del iframe insertado de Youtube: "https://www.youtube.com/embed/f5omY8jVrSM" )' id="url_video" ref={register}/>
                        </div>
                        <div className="contentAdd-perfil-time-box">

                            <fieldset className="contentAdd-perfil-input" style={{padding:"6px 20px 10px 20px", width: "45%", display: "block"}}>
                                <legend>Duracion del contenido:</legend>    

                                <div className="contentAdd-perfil-input time-picker">
                                    <input id="duracion" type="time" name="duracion" step="2" ref={register}/>
                                </div>
                            </fieldset>

                            <fieldset className="contentAdd-perfil-input" style={{padding:"6px 20px 10px 20px", width: "45%", display: "block"}}>
                                <legend>Fecha de lanzamiento:</legend>    

                                <div className="contentAdd-perfil-input date-picker">
                                    <input type="date" name="fecha_lanzamiento" id="fecha_lanzamiento"  min="2000-01-01" max={hoy} ref={register}/>
                                </div>
                            </fieldset>
                            
                        </div>
                    </div>
                </form>
            </div>
            
            <div className="perfilesAdd-perfil-config"  style={{width:"65%",}}>
              <Link to="/home"><button type="submit" onClick={handleSubmit(afegir)} className="perfilesAdd-perfil-config-button confirm-button">Continuar</button></Link>
              <Link to="/home"><button type="submit" className="perfilesAdd-perfil-config-button">Cancelar</button></Link>
            </div>
      </div>
    </div>
</>
)
}
  