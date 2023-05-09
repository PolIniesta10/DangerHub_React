import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../../../userContext';

import { useDispatch, useSelector } from 'react-redux';
// import { delPost } from '../slices/posts/thunks';

export const PerfilGrid = ({v, deletePost}) => {
  
  // const { usuari, email, setUsuari, authToken, setAuthToken } = useContext(UserContext);
  // const { posts = [], page=0, isLoading=true, error="" } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
    return (
  
      <>
      <div className="home-perfil-users">
          <div className="home-perfil-foto">
              <img className="home-perfil-img" src={v.url_avatar} alt=""/>
          </div>
          <div className="home-perfil-name">
              <p>{v.nombre}</p>
          </div>
      </div>
      </>
      
  
  
  
  
  
    )
}
