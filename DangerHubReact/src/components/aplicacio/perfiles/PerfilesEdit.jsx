import React from 'react'
import mainLogo from'/imagenes/DANGERHubLOGO.png';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import { UserContext } from '../../../userContext';
import { getPerfil, editPerfil } from '../../../slices/perfiles/thunks';

export const PerfilesEdit = () => {

    const { usuari, email, setUsuari, authToken, setAuthToken } = useContext(UserContext);
    const { perfil, page=0, error="", isLoading=true } = useSelector((state) => state.perfiles);
    const dispatch = useDispatch();
    const { id } = useParams();
    let [ formulari, setFormulari] = useState({});
  const handleChange = (e)=> {
    e.preventDefault();
    
    setFormulari({
    ...formulari,
    [e.target.name] : e.target.value
    })
    
  }
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
    <div className="py-9 pl-9">


    
{/* <form method="post" action="" enctype="multipart/form-data"> */}
<div className="py-9 flex flex-col gap-y-2">
    <label className="text-gray-600" htmlFor="Name">Nombre</label>
    <input
        type="text"
        name="nombre"
        value= { formulari.nombre }
        className="w-1/3 px-4 py-2 border border-gray-300 outline-none focus:border-gray-400"
        onChange={ handleChange}
    />
</div>

<div className="w-1/3">
<label className="text-gray-600">Url_avatar</label>
<textarea
name="url_avatar"
value= { formulari.url_avatar }
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
placeholder="Url_avatar"
onChange={ handleChange}
></textarea>


<div className="py-9">
{ error ? (<div className="flex w-full items-center space-x-2 rounded-2xl bg-red-50 mb-4 px-4 ring-2 ring-red-200 ">{error}</div>) : (<></>)  }
<button onClick={(e) => dispatch( editPerfil(formulari, authToken, perfil)) }  type="submit" className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
Editar Perfil
</button>
<button type="submit" className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
Cancelar
</button>


</div>







</div>
{/* </form> */}

</div>
</>
  )
}