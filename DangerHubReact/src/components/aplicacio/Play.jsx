import React, { useState, useContext, useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link, useParams } from "react-router-dom";
import { UserContext } from '../../userContext'
import loading from'/videos/introDangerHub.mp4';


export const Play = () => {
  let [ contenido,setContenido ] = useState({});
  let { authToken,setAuthToken } = useContext(UserContext);
  let [ isLoading, setLoading] = useState(true);
  const {id} = useParams();
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
    obtContenido(id, authToken);
    setLoading(false);
    
  }, []);
  return (
    <>
    
      <div className="video-player">
        <Link to="/home"><div className="exit"><BiArrowBack/></div></Link>
        {isLoading ?  
              <div className="loadingPeliculas">
                  <video autoPlay muted loop src={loading}></video>
              </div> : <>
        <div className="video_home_fade top_fade"></div>
        <iframe src={contenido.url_video + "?autoplay=1&amp;loop=1&ampcontrols=0"} frameBorder="0" allow="accelerometer; autoplay; mute;clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loop></iframe>
        <div className="video_home_fade left_fade"></div>
        <div className="video_home_fade right_fade"></div>
        </>}
      </div>
    </>
  )
};


