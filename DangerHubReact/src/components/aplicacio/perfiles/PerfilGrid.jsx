import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../../../userContext';

import { useDispatch, useSelector } from 'react-redux';
// import { delPost } from '../slices/posts/thunks';
import { getPerfil } from '../../../slices/perfiles/thunks'
import { useNavigate } from 'react-router-dom';
import { setPerfil, setSelectedPerfilId  } from '../../../slices/perfiles/perfilesSlice';
export const PerfilGrid = ({v, deletePost}) => {
  
  const { authToken, setAuthToken } = useContext(UserContext);
  let navigate = useNavigate();
  // const { usuari, email, setUsuari, authToken, setAuthToken } = useContext(UserContext);
  // const { posts = [], page=0, isLoading=true, error="" } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [perfilCargado, setPerfilCargado] = useState(false);

  const handleClick = (id) => {
    dispatch(getPerfil(id, authToken));
    handlePerfilCargado(v);
  };

  useEffect(() => {
    let perfil = v.id;
    if (perfilCargado) {
      navigate({
        pathname: "/home",
        state: { perfil: perfil }
      });
    }
  }, [perfilCargado, navigate]);

  const handlePerfilCargado = useCallback((v) => {
    dispatch(setPerfil(v));
    dispatch(setSelectedPerfilId(v.id))
    setPerfilCargado(true);
  }, [dispatch]);

    return (
  
      <>
      <div className="perfiles-perfil-users">
          <div className="perfiles-perfil-foto">
              <button onClick={() => handleClick(v.id)}><Link to={"/home"}><img className="perfiles-perfil-img" src={v.url_avatar} alt=""/></Link></button>
          </div>
          <div className="perfiles-perfil-name">
              <p>{v.nombre}</p>
          </div>
      </div>
      </>
    )
}
