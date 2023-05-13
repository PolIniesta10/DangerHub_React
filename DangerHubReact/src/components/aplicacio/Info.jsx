import React, { useEffect, useState } from 'react';
import laMonja from '/imagenes/laMonja.jpg';
import loading from'/videos/loading.mp4';
import { InfoGrid } from './InfoGrid';
import { useContext } from 'react';
import { UserContext } from '../../userContext';
import { useDispatch, useSelector } from "react-redux";
import { BsPlay } from 'react-icons/bs';
import { MdBookmarkAdd } from 'react-icons/md';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import { Link, useParams, useLocation  } from "react-router-dom";
import fondoparticulas from '/videos/fondoparticulas.mp4';
import peliculasSlice from '../../slices/peliculas/peliculasSlice';
import { getPelicula, getPeliculas } from '../../slices/peliculas/thunks';

export const Info = (perfil) => {
  
  let [ contenido,setContenido ] = useState({});
  let [ user, setUser ] = useState('');
  let [ lista_reproduccion, setLista_reproduccion] = useState([]);
  const [descriptionVisible, setDescriptionVisible] = useState(true);
  let { authToken,setAuthToken } = useContext(UserContext);
  const dispatch = useDispatch();
  const {id} = useParams();
  const { peliculas = [], isLoading=true, error="" } = useSelector((state) => state.peliculas);
  const obtContenido = async (id, authToken) => {
    let data = null;
    console.log(id);
    try {
      data = await fetch("http://127.0.0.1:8000/api/peliculas/" + id, {
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
        setContenido(resposta.data.contenido);
        setUser(resposta.data.user);
        
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
  const obtLista = async (authToken) => {
    let data = null;
    try {
      data = await fetch("http://127.0.0.1:8000/api/listas_reproduccion", {
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

    const container1 = document.querySelector('.films');
    const leftArrow1 = document.querySelector('.carousel-arrow.left-info');
    const rightArrow1 = document.querySelector('.carousel-arrow.right-info');

    leftArrow1.addEventListener('click', () => {
      container1.scrollBy({ left: -1000, behavior: 'smooth' });
    });

    rightArrow1.addEventListener('click', () => {
      container1.scrollBy({ left: 1000, behavior: 'smooth' });
    });

    document.getElementById("description").style.display = "block";

    setDescriptionVisible(true);
    dispatch(getPeliculas(authToken));
    obtContenido(id, authToken);
    
  }, []);
  useEffect(() => {
    obtLista(authToken);
    console.log(lista_reproduccion);      
    console.log(perfil);
  }, []) 

  const guardarContenido = async (id, id_lista) => {
    let data = null;
    console.log(id);
    console.log(id_lista);
    try {
      data = await fetch("http://127.0.0.1:8000/api/contenidos/" + id + "/guardar/" + id_lista, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer '  + authToken
        },
        method: "POST",
      })
      const resposta = await data.json();
      if (resposta.success === true && resposta.data) {
        console.log(resposta);
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
            <div><button onClick={() => guardarContenido(contenido.id, lista_reproduccion[0].id)}><MdBookmarkAdd/></button></div>
            <div><AiOutlineCloudDownload/></div>
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
              {isLoading ?  
              
                <div className="film">
                  <video autoPlay muted loop src={loading} style={{width: "100%", height: "100%"}}></video>
                  <video autoPlay muted loop src={loading} style={{width: "100%", height: "100%"}}></video>
                  <video autoPlay muted loop src={loading} style={{width: "100%", height: "100%"}}></video>
                </div> 

              : <>{peliculas.map((v) => {
                return (
                  <>
                    <InfoGrid key={v.id} v={v}  {...v}/>
                  </>
                )
              })}</>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



    

