import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../../../userContext';

import { useDispatch, useSelector } from 'react-redux';
// import { delPost } from '../slices/posts/thunks';

export const PerfilGridEditar = ({v, deletePost}) => {
  
  // const { usuari, email, setUsuari, authToken, setAuthToken } = useContext(UserContext);
  // const { posts = [], page=0, isLoading=true, error="" } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
    return (
  
      <>
      <div className="perfiles-perfil-users">
          <div className="perfiles-perfil-foto edit-perfil">
              <Link to={"/perfiles/edit/"+v.id}><img className="perfiles-perfil-img" src={v.url_avatar} alt=""/></Link>
          </div>
          <div className="perfiles-perfil-name">
              <p>{v.nombre}</p>
          </div>
      </div>
      </>
      
  
  
  
  
  
    )
}
