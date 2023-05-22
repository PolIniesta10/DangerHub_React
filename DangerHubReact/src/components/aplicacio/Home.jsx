import React, { useEffect, useState } from 'react';
import { BsPlay } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";
import loading from'/videos/introDangerHubNegra.webm';
import NoResults from'/imagenes/NoResults.jpg';
import { RecomendedGrid } from './RecomendedGrid';
import { GuardadosGrid } from './GuardadosGrid';
import { useContext } from 'react';
import { UserContext } from '../../userContext';
import { useDispatch, useSelector } from "react-redux";
import { getPelicula, getPeliculas, getTusPeliculas } from '../../slices/peliculas/thunks';
import { useLocation } from 'react-router-dom';
import { getPeliculasGuardadas } from '../../slices/peliculas/thunks'

export const Home = () => {

  const [ isLoadingAllPage, setisLoadingAllPage ] = useState(true);
  let { authToken,setAuthToken } = useContext(UserContext);
  const { peliculas = [], peliculasGuardadas = [], isLoading=true, error="", tusPeliculas = [] } = useSelector((state) => state.peliculas);
  const { perfiles = [], selectedPerfilId = null } = useSelector((state) => state.perfiles);
  const location = useLocation();
  const perfil = location.state && location.state.perfil;
  let [ lista, setLista_reproduccion] = useState({});
  let [ userId,setUserId ] = useState('');
  const dispatch = useDispatch();

  const randomIndex = Math.floor(Math.random() * peliculas.length);
  const peli_random = peliculas[randomIndex];
  const videoId = peli_random && peli_random.url_video && peli_random.url_video.split('embed/')[1];
  
  const obtUser = async () => {
    try{
        const data = await fetch("http://equip09.insjoaquimmir.cat/api/user", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Bearer '  + authToken
        },
        method: "GET",
        })
        const resposta = await data.json();
        if (resposta.success === true) {
            console.log(resposta.user);
            setUserId(resposta.user.id);
        }
        else {
            console.log("error");
        }
    }
    catch {
    console.log(data);
    alert("Catch");
    }
  };

  const obtLista = async (selectedPerfilId, authToken) => {
    let data = null;
    try {
      data = await fetch("http://equip09.insjoaquimmir.cat/api/listas_reproduccion/" + selectedPerfilId, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer '  + authToken
        },
        method: "GET",
      })
      const resposta = await data.json();
      if (resposta.success === true && resposta.data) {
        console.log(resposta);
        setLista_reproduccion(resposta.data);
        console.log(resposta.data);
        
      }
      else {
        console.log("error");
      }
    }
    catch (error) {
      console.log(error);
      alert("Catch");
      data = {};
    }
  };

  useEffect(() => {
    const container1 = document.querySelector('.carousel-container');
    const leftArrow1 = document.querySelector('.carousel-arrow.left');
    const rightArrow1 = document.querySelector('.carousel-arrow.right');

    if (container1 && leftArrow1 && rightArrow1) {
      leftArrow1.addEventListener('click', () => {
        container1.scrollBy({ left: -1000, behavior: 'smooth' });
      });
  
      rightArrow1.addEventListener('click', () => {
        container1.scrollBy({ left: 1000, behavior: 'smooth' });
      });
    }

    const container2 = document.querySelector('.carousel-container2');
    const leftArrow2 = document.querySelector('.carousel-arrow2.left');
    const rightArrow2 = document.querySelector('.carousel-arrow2.right');

    if (container2 && leftArrow2 && rightArrow2) {
      leftArrow2.addEventListener('click', () => {
        container2.scrollBy({ left: -1000, behavior: 'smooth' });
      });
  
      rightArrow2.addEventListener('click', () => {
        container2.scrollBy({ left: 1000, behavior: 'smooth' });
      });
    }

    const container3 = document.querySelector('.carousel-container3');
    const leftArrow3 = document.querySelector('.carousel-arrow3.left');
    const rightArrow3 = document.querySelector('.carousel-arrow3.right');

    if (container3 && leftArrow3 && rightArrow3) {
      leftArrow3.addEventListener('click', () => {
        container3.scrollBy({ left: -1000, behavior: 'smooth' });
      });
  
      rightArrow3.addEventListener('click', () => {
        container3.scrollBy({ left: 1000, behavior: 'smooth' });
      });
    }
    
  }, []);
  
  useEffect(() => {
    obtUser();
    
    
    
  }, [authToken])
  
  useEffect(() => {
    const delay = 4000;
    const timer = setTimeout(() => {
      if (userId) {
        obtLista(selectedPerfilId, authToken);
        dispatch(getPeliculas(authToken));
        dispatch(getTusPeliculas(authToken, userId));
        setisLoadingAllPage(false);
      }
    }, delay);

    return () => clearTimeout(timer);

  }, [selectedPerfilId, authToken, userId, dispatch])
  useEffect(() => {
    if (lista.id) {
      dispatch(getPeliculasGuardadas(authToken, lista.id));
    }
  }, [lista.id, dispatch, authToken]);
  if (isLoadingAllPage) {
    return <div className="loadingPeliculas">
      <video autoPlay muted loop src={loading}></video>
      </div>;
  }
  return (
    <>
    
        <div className="container">
        {isLoading ?  
              <div className="loadingPeliculas">
                  <video autoPlay muted loop src={loading}></video>
              </div>
                : <>
          {peli_random && (
            <div className="home_video_container">
               <div className="video_home_fade top_fade"></div>
                {peli_random && (
                  <>
                    <iframe width="100%" height="100%" src={peli_random.url_video + "?autoplay=1&amp;mute=1&amp;loop=1&ampcontrols=0"} frameBorder="0" allow="accelerometer; autoplay; mute;loop;clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loop></iframe>
                  </>
                )}
              <div className="video_home_fade left_fade"></div>
              <div className="video_home_fade right_fade"></div>
            </div>
          )}
          <div className="content-box">
            {peli_random && peli_random.id && (
              <>
                <h1>{peli_random.titulo}</h1>
                <p>{peli_random.descripcion}</p>
                <div className="buttons">
                  <Link to={"/play/"+peli_random.id}><div className="button-play"><BsPlay/>Play</div></Link>
                  <Link to={{ pathname: "/info/" + peli_random.id, perfil}}><div className="button-info" ><AiOutlineInfoCircle/>Más Info</div></Link>
                </div>
            </>
            )}
            {/* Carrusel de contenido */}
            {peliculasGuardadas.length === 0 ? ( 
            <section className="content-carousel">
              <p>Mi Lista</p>
              <div className="carousel-container">
                <div className="content-card">
                  <img  draggable="false"  src={NoResults} alt="Ninguna contenido añadido a tu lista"/>
                  <h3>Sin contenido en la lista</h3>
                </div>
              </div>
            </section> ) : (

            <section className="content-carousel">
              <p>Mi Lista</p>
              <div className="carousel-arrow left"><BsFillArrowLeftCircleFill/></div>
              <div className="carousel-arrow right"><BsFillArrowRightCircleFill/></div>
              <div className="carousel-container">
                {/* Tarjetas de contenido */}
                {peliculasGuardadas.map((v) => {
                return (
                  <>
                    <GuardadosGrid v={v.id}  {...v}/>
                  </>
                )
              })}
              </div>
            </section> )}

            {/* Carrusel de contenido */}
            <section className="content-carousel">
                <p>Más populares</p>
                <div className="carousel-arrow2 left"><BsFillArrowLeftCircleFill/></div>
                <div className="carousel-arrow2 right"><BsFillArrowRightCircleFill/></div>
              <div className="carousel-container2">
              {peliculas.map((v) => {
                return (
                  <>
                    <RecomendedGrid key={v.id} v={v}  {...v}/>
                  </>
                )
              })}
              </div>
            </section>

            {/* Carrusel de contenido */}

            {tusPeliculas.length === 0 ? ( 
            <section className="content-carousel">
              <p>Mis publicaciones</p>
              <div className="carousel-container">
                <div className="content-card">
                  <img  draggable="false"  src={NoResults} alt="Ninguna publicacion"/>
                  <h3>No hay publicaciones hechas por esta cuenta</h3>
                </div>
              </div>
            </section> ) : (

            <section className="content-carousel">
                <p>Mis publicaciones</p>
                <div className="carousel-arrow3 left"><BsFillArrowLeftCircleFill/></div>
                <div className="carousel-arrow3 right"><BsFillArrowRightCircleFill/></div>
              <div className="carousel-container3">

              {tusPeliculas.map((v) => {
                return (
                  <>
                    <RecomendedGrid key={v.id} v={v}  {...v}/>
                  </>
                )
              })}

              </div>
            </section>)}

          </div>
          </>}
        </div>
        
    </>
  )
}

