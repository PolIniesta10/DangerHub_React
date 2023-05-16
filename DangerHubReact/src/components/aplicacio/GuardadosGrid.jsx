import React, { useEffect, useContext} from 'react';
import { Link } from "react-router-dom";
import { getPelicula } from '../../slices/peliculas/thunks';
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from '../../userContext';

export const GuardadosGrid = (v) => {
  
  return (
    <>

      <div className="content-card">
        
       
      <Link to={"/info/"+v.id}><img  draggable="false"  src={v.url_imagen} alt={v.titulo} /></Link>
        <h3>{v.titulo}</h3>
     
        

      </div>

    </>
  )
}

