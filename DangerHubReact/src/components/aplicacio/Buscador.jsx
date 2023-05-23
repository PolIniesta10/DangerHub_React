import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPeliculas } from '../../slices/peliculas/thunks';
import { RecomendedGrid } from './RecomendedGrid';
import { UserContext } from '../../userContext';
import { Link, useParams } from "react-router-dom";
import { FiSearch } from 'react-icons/fi';
import fondoparticulas from '/videos/fondoparticulas.mp4';
import loading from'/videos/loading.mp4';
import NoResults from'/imagenes/NoResults.jpg';

export const Buscador = () => {
  const { peliculas = [], isLoading = true, error = '' } = useSelector((state) => state.peliculas);
  const { authToken } = useContext(UserContext);
  const [busqueda, setBusqueda] = useState('');
  const [peliculasFiltradas, setPeliculasFiltradas] = useState([]);
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeliculas(authToken));
  }, [dispatch, authToken]);

  useEffect(() => {
    const filtrarPeliculas = () => {
      return peliculas.filter((pelicula) =>
        pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase())
      );
    };

    const peliculasFiltradas = filtrarPeliculas();
    setPeliculasFiltradas(peliculasFiltradas);
  }, [busqueda, peliculas]);

  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value);
  };

  console.log(peliculasFiltradas)

  return (
    <>
      {isLoading ? null : ( 
        <>
          <div className="video-container" style={{width: "100%"}}>
            <video autoPlay muted loop>
              <source src={fondoparticulas} type="video/mp4" />
            </video>
          </div>
        </>)}

      <div className="buscador_container">
        <div className="buscador_header">
          <h1>Buscador de películas</h1>
          <div class="buscador_search">
            <span class="icon"><FiSearch/></span>
            <input type="search" id="search" value={busqueda} onChange={handleBusquedaChange} placeholder="Buscar películas"/>
          </div>
        </div>
        <div className="buscador_content">

          {isLoading ? (
            <div className="loadingPeliculas" style={{height: "60%"}}>
                <video autoPlay muted loop src={loading}></video>
            </div>
          ) : ( 
            <>
              {peliculasFiltradas.length === 0 ? ( 
                <div className="content-card">
                  <img  draggable="false"  src={NoResults} alt="Ninguna publicacion"/>
                  <h3>No hay contenido similar a estas caracteristicas</h3>
                </div>
              ) : (
                <>
                  {peliculasFiltradas.map((v) => {
                    return (
                      <>
                        <RecomendedGrid v={v.id} {...v} />
                      </>
                    )
                  })}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
