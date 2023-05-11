import React from 'react'
import mainLogo from'/imagenes/DANGERHubLOGO.png';
import DHUB from'/imagenes/DHUB.png';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../../../userContext";
import { useContext, useEffect } from "react";
import { addPerfil } from '../../../slices/perfiles/thunks';
import { useForm } from "react-hook-form";

export const PerfilesAdd = () => {
<<<<<<< HEAD

=======
    const { register, handleSubmit,formState: { errors },setValue} = useForm();
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { usuari, email, setUsuari, authToken, setAuthToken } = useContext(UserContext);

    const afegir = (data) => {

        const data2 = { ...data, nombre: data.nombre, url_avatar: data.url_avatar}
        console.log(data2);
        dispatch(addPerfil(data2, authToken));
    
        navigate("/administrarPerfiles");
        
      }
>>>>>>> 5641ca4995ae22f3d427ba7886993c3e95271bc1
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
<<<<<<< HEAD
                <form action="">
                    <div className="perfilesAdd-perfil-foto">
                        <img className="perfiles-perfil-img" src={DHUB} alt=""/>
                    </div>
                    <div className="perfilesAdd-perfil-inputs-box">
                        <div className="perfilesAdd-perfil-input">
                            <input type="url" name="url_avatar" placeholder='URL de la imagen ( Por defecto es el logo de DangeHub )' id="url_avatar"/>
                        </div>
                        <div className="perfilesAdd-perfil-input">
                            <input type="text" name="nombre" placeholder='Profile name' id="nombre" minLength="2" maxLength="20" required/>
                        </div>
                    </div>
                </form>
            </div>
            
            <div className="perfilesAdd-perfil-config">
                <Link to="/home"><button type="submit" className="perfilesAdd-perfil-config-button confirm-button">Continuar</button></Link>
                <Link to="/administrarPerfiles"><button type="submit" className="perfilesAdd-perfil-config-button">Cancelar</button></Link>
=======
                <div className="py-9 pl-9">
                <label className="text-gray-600" htmlFor="Name">
              Nombre
            </label>
            <input
              type="text"
              // name="latitude"
              // value={formulari.latitude}
              // onChange={handleChange}
              className="w-1/3 px-4 py-2 border border-gray-300 outline-none focus:border-gray-400"
              {...register("nombre", {
                required: "Aquest camp és obligatori",         
              })}
            />
                <label className="text-gray-600">Url del avatar</label>
          <textarea
            // name="body"
            // value={formulari.body}
            className="
      w-full
      h-32
      px-4
      py-3
      border-2 border-gray-300
      rounded-sm
      outline-none
      focus:border-blue-400
    "
            placeholder="Url"
            // onChange={handleChange}
            {...register("url_avatar", {
              required: "Aquest camp és obligatori",
              
             
            })}
          ></textarea>
          <div className="py-9">
            <button
              // onClick={(e) => { e.preventDefault();  dispatch( addPost(formulari, authToken))} }
              // type="submit"
              onClick={handleSubmit(afegir)}
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Afegir Entrada
            </button>
          </div>
          <Link to={"/home"}>Cancelar</Link>
                </div>
>>>>>>> 5641ca4995ae22f3d427ba7886993c3e95271bc1
            </div>
        </div>
    </div>
</>
)
}
  