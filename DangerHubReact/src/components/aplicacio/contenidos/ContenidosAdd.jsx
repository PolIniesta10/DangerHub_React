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

    const [urlImagen, setUrlImagen] = useState("");
    const [fechaHoy, setFechaHoy] = useState(new Date());
    const hoy = fechaHoy.toISOString().slice(0, 10);
    const { authToken } = useContext(UserContext);
    const [tipoContenido, setTipoContenido] = useState("1"); 
    const [tituloContenido, setTitulo] = useState('');
    const [descripcionContenido, setDescripcion] = useState('');
    const [descripcionLargaContenido, setDescripcionLarga] = useState('');
    const [urlVideoContenido, setUrlVideo] = useState('');
    const [duracionContenido, setDuracion] = useState('');
    const [fecha_lanzamientoContenido, setFecha_Lanzamiento] = useState('');
    const { handleSubmit, setValue } = useForm();    
    useEffect(() => {
      if (urlImagen) {
        setValue("url_imagen", urlImagen);
      }
    }, [urlImagen]);
  
    const handleUrlAvatarChange = (event) => {
        setUrlImagen(event.target.value);
    };
    const handleUrlVideorChange = (event) => {
        setUrlVideo(event.target.value);
    };
    const handleTituloChange = (event) => {
        setTitulo(event.target.value);
    };
    const handleDescripcionChange = (event) => {
        setDescripcion(event.target.value);
    };
    const handleDescripcionLargaChange = (event) => {
        setDescripcionLarga(event.target.value);
    };
    const handleDuracionChange = (event) => {
        setDuracion(event.target.value);
    };
    const handleFecha_LanzamientoChange = (event) => {
        setFecha_Lanzamiento(event.target.value);
    };
      
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const afegir = (data) => {
        const data2 = {
            ...data,
            titulo: tituloContenido,
            descripcion: descripcionContenido,
            descripcionLarga: descripcionLargaContenido,
            url_imagen: data.url_imagen,
            url_video: urlVideoContenido,
            duracion: duracionContenido,
            fecha_lanzamiento: fecha_lanzamientoContenido,
            id_categoria: tipoContenido,
        };
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
                    <img className="perfiles-perfil-img" src={urlImagen||DHUB} alt=""  />
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
                            placeholder='Nombre del contenido' minLength="2" maxLength="20" onChange={handleTituloChange}/>
                        </div>

                        <div className="contentAdd-perfil-input">
                            <input name="descripcion" id="descripcion" placeholder="Descripcion corta del contenido" onChange={handleDescripcionChange}></input>
                        </div>
                        <div className="contentAdd-perfil-input">
                            <textarea name="descripcionLarga" id="descripcionLarga" placeholder="Descripcion larga del contenido" onChange={handleDescripcionLargaChange}></textarea>
                        </div>

                        <div className="contentAdd-perfil-input">
                            <input type="url" name="url_imagen"
                            placeholder='URL de la imagen ( Por defecto es el logo de DangeHub )' id="url_imagen" onChange={handleUrlAvatarChange} value={urlImagen} />
                        </div>

                        <div className="contentAdd-perfil-input">
                            <input type="url" name="url_video"
                            placeholder='URL del video ( Etiqueta "src" del iframe insertado de Youtube: "https://www.youtube.com/embed/f5omY8jVrSM" )' id="url_video" onChange={handleUrlVideorChange}/>
                        </div>
                        <div className="contentAdd-perfil-time-box">

                            <fieldset className="contentAdd-perfil-input-fieldset">
                                <legend>Duracion del contenido:</legend>    

                                <div className="contentAdd-perfil-input time-picker">
                                    <input id="duracion" type="time" name="duracion" step="2" onChange={handleDuracionChange}/>
                                </div>
                            </fieldset>

                            <fieldset className="contentAdd-perfil-input-fieldset">
                                <legend>Fecha de lanzamiento:</legend>    

                                <div className="contentAdd-perfil-input date-picker">
                                    <input type="date" name="fecha_lanzamiento" id="fecha_lanzamiento"  min="2000-01-01" max={hoy} onChange={handleFecha_LanzamientoChange}/>
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
  