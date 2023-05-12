import React, { useEffect} from 'react';
import { Link } from "react-router-dom";

export const RecomendedGrid = (v) => {
  
  return (
    <>

      <div className="content-card">
        <Link to={"/info/"+v.id}><img  draggable="false"  src={v.url_imagen} alt={v.titulo} /></Link>
        <h3>{v.titulo}</h3>
      </div>

    </>
  )
}

