import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../../../userContext';

import { useDispatch, useSelector } from 'react-redux';
// import { delPost } from '../slices/posts/thunks';
import { getPerfil } from '../../../slices/perfiles/thunks'
import { useNavigation } from 'react-router';
export const PerfilGrid = ({v, deletePost}) => {
  
  const { authToken, setAuthToken } = useContext(UserContext);
  let navigate = useNavigation();
  // const { usuari, email, setUsuari, authToken, setAuthToken } = useContext(UserContext);
  // const { posts = [], page=0, isLoading=true, error="" } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const handleClick = (id_perfil) => {
    dispatch(getPerfil(id_perfil, authToken));
    navigate("/home");
  };
    return (
  
      <>
      <div className="home-perfil-users">
          <div className="home-perfil-foto">
              <button onClick={handleClick(v.id)}><img className="home-perfil-img" src={v.url_avatar} alt=""/></button>
          </div>
          <div className="home-perfil-name">
              <p>{v.nombre}</p>
          </div>
      </div>
      </>
      
  
  
  
  
  
    )
}
