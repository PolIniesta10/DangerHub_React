import React from 'react'
import mainLogo from'/imagenes/DANGERHubLOGO.png';
import DHUB from'/imagenes/DHUB.png';
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../../../userContext";
import { useContext, useEffect, useState } from "react";
import { addPerfil} from '../../../slices/perfiles/thunks';
import { useForm } from "react-hook-form";

export const PerfilesAdd = () => {

  const { register, handleSubmit,formState: { errors }, setValue} = useForm();
  const { usuari, email, setUsuari, authToken, setAuthToken } = useContext(UserContext);

  const [urlAvatar, setUrlAvatar] = useState("");

  useEffect(() => {
    if (urlAvatar) {
      setValue("url_avatar", urlAvatar);
    }
  }, [urlAvatar]);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const afegir = (data) => {

    const data2 = { ...data, nombre: data.nombre, url_avatar: data.url_avatar}
    console.log(data2);
    dispatch(addPerfil(data2, authToken));

    navigate("/administrarPerfiles"); 
  }

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
                <h1>Añadir perfil</h1>
                <p>Añade un perfil para que otra persona pueda ver DangerHub.</p>
            </div>

            <div className="perfilesAdd-perfil-users">
                <form action="">
                    <div className="perfilesAdd-perfil-foto">
                    <img className="perfiles-perfil-img" src={urlAvatar||DHUB} alt=""  />
                    </div>
                    <div className="perfilesAdd-perfil-inputs-box">
                        
                        <div className="perfilesAdd-perfil-input">
                            <input type="url" name="url_avatar" {...register("url_avatar", {required: "Este campo és obligatorio",})} 
                            placeholder='URL de la imagen ( Por defecto es el logo de DangeHub )' id="url_avatar" onChange={handleUrlAvatarChange} value={urlAvatar} />
                        </div>
                        
                        <div className="perfilesAdd-perfil-input">
                            <input type="text" name="nombre" {...register("nombre", {required: "Este campo és obligatorio",})} 
                            placeholder='Nombre del perfil' id="nombre" minLength="2" maxLength="20"/>
                        </div>
                    </div>
                </form>
            </div>
            
            <div className="perfilesAdd-perfil-config">
              <Link to="/home"><button onClick={handleSubmit(afegir)} type="submit" className="perfilesAdd-perfil-config-button confirm-button">Continuar</button></Link>
              <Link to="/administrarPerfiles"><button type="submit" className="perfilesAdd-perfil-config-button">Cancelar</button></Link>
            </div>
      </div>
    </div>
</>
)
}
  