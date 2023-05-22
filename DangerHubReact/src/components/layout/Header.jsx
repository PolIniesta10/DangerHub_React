import React from 'react'
import mainLogo from'/imagenes/LogoDangerHub.png';
import { Link } from 'react-router-dom'
import { UserContext } from '../../userContext';
import { useState, useContext, useEffect } from "react";


export const Header = () => {

  let { authToken,setAuthToken } = useContext(UserContext);
  let [ user,setUser ] = useState('');
  let [ userId,setUserId ] = useState('');
  let [ perfiles, setPerfiles ] = useState('');

  // let [ roles, setRoles] = useState([]);

  
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
              setUser(resposta.user.name);
              setUserId(resposta.user.id);
          }
    }
    catch {
      alert("Catch");
    }
  };
  
  useEffect(() => {
    obtUser();
  }, [])
  
  return (
    <div className='cajamasterheader'>
      <Link to="/home"><img src={mainLogo} alt="" /></Link>
    </div>
  )
}