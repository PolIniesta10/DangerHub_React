import React from 'react'
import mainLogo from'/imagenes/DANGERHubLOGO.png';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../../../userContext";
import { useContext, useEffect } from "react";
import { addPerfil } from '../../../slices/perfiles/thunks';
import { useForm } from "react-hook-form";

export const PerfilesAdd = () => {
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
  return (
    <>
    <div className="home-container">
        <div className="home-header">  
            <Link to="/home"><img src={mainLogo} alt="" className="home-header-logo"/></Link>
        </div>

        <div className="home-content">
            <div className="perfilesAdd-titulo">
                <h1>Añadir perfil</h1>
                <p>Añade un perfil para que otra persona pueda ver DangerHub.</p>
            </div>

            <div className="perfilesAdd-perfil-users">
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
            </div>
        </div>
    </div>
</>
)
}
  