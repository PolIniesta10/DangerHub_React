import React, { useEffect, useContext} from 'react';
import { Link } from "react-router-dom";
import { getPelicula } from '../../slices/peliculas/thunks';
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from '../../userContext';

export const GuardadosGrid = (v) => {
  
  let { authToken,setAuthToken } = useContext(UserContext);

  const dispatch = useDispatch();

  const { pelicula = {}, isLoading = false } = useSelector((state) => state.peliculas);

  // useEffect(() => {
    
  //   dispatch(getPelicula(v.id_contenido, authToken));
    
  // }, []) 
  


  return (
    <>

      <div className="content-card">
        
       
        {/* <img  draggable="false"  src={contenidoRelacionado.url_imagen} alt={contenidoRelacionado.titulo} />
        <h3>{contenidoRelacionado.titulo}</h3> */}
     
        <h3>{v.id_contenido}</h3>
        <h3>{v.perfil}</h3>
        <h3>{v.id_lista}</h3>

      </div>

    </>
  )
}

