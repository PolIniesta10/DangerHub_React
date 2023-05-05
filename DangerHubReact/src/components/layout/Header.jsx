import React from 'react'
import mainLogo from'/imagenes/LogoDangerHub.png';
import { Link } from 'react-router-dom'
// import { UserContext } from '../../userContext';
// import { useState, useContext, useEffect } from "react";


export const Header = () => {

  // let { authToken,setAuthToken } = useContext(UserContext);
  // let [ user,setUser ] = useState('');
  // let [ roles, setRoles] = useState([]);

  // const logOut = async () => {
  //   try {
  //     const data = await fetch("https://backend.insjoaquimmir.cat/api/logout", {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       'Authorization': 'Bearer '  + authToken
  //     },
  //     method: "POST",
  //     });
  //     const resposta = await data.json();
  //       if (resposta.success === true) {
  //         setAuthToken("");
  //       }
  //     }
  //   catch {
  //     console.log(data);
  //     alert("Catchch");
  //   }
  // };
  // const obtUser = async () => {
  //   try{
  //       const data = await fetch("https://backend.insjoaquimmir.cat/api/user", {
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //           'Authorization': 'Bearer '  + authToken
  //         },
  //         method: "GET",
  //       })
  //         const resposta = await data.json();
  //         if (resposta.success === true) {
  //             console.log(resposta);
  //             setUser(resposta.user.name);
  //             setRoles(resposta.roles);
  //         }
  //         else {
  //           console.log("error");
  //         }
  //   }
  //   catch {
  //     console.log(data);
  //     alert("Catch");
  //   }
  // };
  
  // useEffect(() => {
  //   obtUser();
  // }, [])

  return (
    <div className='cajamasterheader'>
      <Link to="/home"><img src={mainLogo} alt="" /></Link>
    </div>
  )
}