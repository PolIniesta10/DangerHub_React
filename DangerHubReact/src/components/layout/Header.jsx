import React, { useState } from 'react'
import mainLogo from'/imagenes/LogoDangerHub.png';
import { Link } from 'react-router-dom'
// import { UserContext } from '../../userContext';
// import { useState, useContext, useEffect } from "react";


export const Header = () => {

  let { authToken,setAuthToken } = useContext(UserContext);
  let [ user,setUser ] = useState('');
  let [ userId,setUserId ] = useState('');
  let [ perfiles, setPerfiles ] = useState('');

  // let [ roles, setRoles] = useState([]);

  
  const obtUser = async () => {
    try{
        const data = await fetch("http://127.0.0.1:8000/api/user", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Bearer '  + authToken
          },
          method: "GET",
        })
          const resposta = await data.json();
          if (resposta.success === true) {
              console.log(resposta);
              setUser(resposta.user.name);
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
  
  useEffect(() => {
    obtUser();
    obtPerfilUsuari();
  }, [])
  const obtPerfilUsuari = async () => {
    try{
        const data = await fetch("http://127.0.0.1:8000/api/perfiles/" + userId, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Bearer '  + authToken
          },
          method: "GET",
        })
          const resposta = await data.json();
          if (resposta.success === true) {
              console.log(resposta);
              setPerfiles(resposta.data);
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
  return (
    <div className='cajamasterheader'>
      <Link to="/home"><img src={perfiles.url_avatar} alt="" /></Link>
    </div>
  )
}