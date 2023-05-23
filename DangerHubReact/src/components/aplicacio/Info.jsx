import React, { useEffect, useState } from 'react';
import loading from'/videos/loading.mp4';
import { InfoGrid } from './InfoGrid';
import { useContext } from 'react';
import { UserContext } from '../../userContext';
import { useDispatch, useSelector } from "react-redux";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { FiSave }from 'react-icons/fi';
import { Link, useParams, useLocation  } from "react-router-dom";
import fondoparticulas from '/videos/fondoparticulas.mp4';
import peliculasSlice from '../../slices/peliculas/peliculasSlice';
import { getPelicula, getPeliculas, guardarContenido, quitarContenido, testGuardados } from '../../slices/peliculas/thunks';
import { getPerfil } from '../../slices/perfiles/thunks';
import { getPeliculasGuardadas } from '../../slices/guardados/thunks'

export const Info = (perfil) => {
  
  let [ contenido,setContenido ] = useState({});
  let [ user, setUser ] = useState('');
  let [ lista, setLista_reproduccion] = useState({});
  const [descriptionVisible, setDescriptionVisible] = useState(true);
  let { authToken,setAuthToken } = useContext(UserContext);
  const dispatch = useDispatch();
  const {id} = useParams();
  const { peliculas = [], isLoading=true, error="", guardado=false } = useSelector((state) => state.peliculas);
  const { perfiles = [], selectedPerfilId = null } = useSelector((state) => state.perfiles);
  const { guardados = [] } = useSelector((state) => state.guardados);
  const [selectedMovieId, setSelectedMovieId] = useState(null);


  const handleMovieClick = (movieId) => {
    setSelectedMovieId(movieId);
  };

  const obtContenido = async (id, authToken) => {
    let data = null;
    try {
      data = await fetch("http://equip09.insjoaquimmir.cat/api/peliculas/" + id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer '  + authToken
        },
        method: "GET",
      })
      const resposta = await data.json();
      if (resposta.success === true && resposta.data) {
        setContenido(resposta.data.contenido);
        setUser(resposta.data.user);
        
      }
    }
    catch (error) {
      alert("Catch");
      data = {};
    }
  };

  const obtSelectedContent = async (id, authToken) => {
    let data = null;
    try {
      data = await fetch("http://equip09.insjoaquimmir.cat/api/peliculas/" + selectedMovieId, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + authToken,
      },
      method: "GET",
      });
      const resposta = await data.json();
      if (resposta.success === true && resposta.data) {
        console.log(resposta);
        setContenido(resposta.data.contenido);
        setUser(resposta.data.user);
      }
    } catch (error) {
      alert("Catch");
      data = {};
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
        setLista_reproduccion(resposta.data);
      }
    }
    catch (error) {
      alert("Catch");
      data = {};
    }
  };
  
  useEffect(() => {

    const containerInfo = document.querySelector('.films');
    const leftArrowInfo = document.querySelector('.carousel-arrow.left-info');
    const rightArrowInfo = document.querySelector('.carousel-arrow.right-info');

    leftArrowInfo.addEventListener('click', () => {
      containerInfo.scrollBy({ left: -1000, behavior: 'smooth' });
    });

    rightArrowInfo.addEventListener('click', () => {
      containerInfo.scrollBy({ left: 1000, behavior: 'smooth' });
    });

    document.getElementById("description").style.display = "block";

    setDescriptionVisible(true);
    dispatch(getPeliculas(authToken));
    dispatch(getPerfil(selectedPerfilId, authToken));
    obtLista(selectedPerfilId, authToken);
    dispatch(getPeliculasGuardadas(authToken, lista.id))
    obtContenido(id, authToken);
    
  }, []);
  
  useEffect(() => {
    // Resto del código...
  
    if (selectedPerfilId && lista && lista.id) {
      dispatch(testGuardados(authToken, id, lista.id, selectedPerfilId));
    } 
  }, [selectedPerfilId, lista]);

  useEffect(() => {
  
    if (selectedMovieId) {
      obtSelectedContent(selectedMovieId, authToken);
    }
  }, [selectedMovieId]);

  // Switch between tabs when a tab button is clicked
  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    setDescriptionVisible(tabName === "description");
  }
  
  return (
    <>
     {isLoading ? <video autoPlay muted loop className="perfiles-perfil-loading" src={loading} style={{height: "80%",width: "80%"}}></video>: <>
     
      <div className="video-container" style={{width: "100%"}}>
        <video autoPlay muted loop>
          <source src={fondoparticulas} type="video/mp4" />
        </video>
      </div>
      <div className="container-info">
        <div className="portada-info">
          <Link to={"/play/"+contenido.id}><img src={contenido.url_imagen} draggable="false"/></Link> 
        </div>

        <div className="content-box-info">
          <Link to="/home"><div className="exit"><BiArrowBack/></div></Link>
          <div className="title-content">{contenido.titulo}</div>

          <div className="details">
            <div>{contenido.fecha_lanzamiento}</div>
            <div>|</div>
            <div>{contenido.duracion}</div>
            <div>|</div>
            <div>+18</div>
          </div>

          <div className="tabs">
            <div className="tablink active" onClick={(e) => openTab(e, 'description')}>GENERAL</div>
            <div className="tablink" onClick={(e) => openTab(e, 'opciones')}>MÁS OPCIONES</div> 
          </div> 
          <div id="description" className="tabcontent description" style={{display: descriptionVisible ? "flex" : "none"}}>{contenido.descripcion}</div>
          <div id="opciones" className="tabcontent opciones" style={{display: descriptionVisible ? "none" : "flex", width: "250px"}}>
              {guardado ? (<div onClick={(e) => dispatch(quitarContenido(authToken, contenido.id, lista.id, selectedPerfilId))}><AiFillDelete/></div>) : 
              
              (<div onClick={(e) => dispatch(guardarContenido(authToken, contenido.id, lista.id, selectedPerfilId))}><FiSave/></div>)}


          </div>
          
          <div className="specific-info-box">
            <div className="specific-title">Autor:</div>
            <div className="specific-name">{user} </div>
          </div> 

          <div className="related_films">
            <div className="title">Peliculas Relacionadas</div>
            <div className="carousel-arrow left-info"><BsFillArrowLeftCircleFill/></div>
            <div className="carousel-arrow right-info"><BsFillArrowRightCircleFill/></div>

            <div className="films">
              {peliculas.map((v) => {
                return (
                  <>
                    <InfoGrid key={v.id} v={v} onClick={handleMovieClick} />
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      </>}
    </>
  )
}



    

