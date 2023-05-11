import React, { useEffect, useState, useContext} from 'react';
import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi';
import { RiHome2Line } from 'react-icons/ri';
import { RiFileListLine } from 'react-icons/ri';
import { BiCloudDownload } from 'react-icons/bi';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { BsPlusCircle } from 'react-icons/bs';
import { UserContext } from '../../userContext';
import { useSelector } from 'react-redux';

export const Sidebar =  () => {
  
  let [ userId,setUserId ] = useState('');
  let { authToken, setAuthToken } = useContext(UserContext);
  const { perfiles, error="", isLoading=true } = useSelector((state) => state.perfiles);
  const selectedPerfilId = useSelector(state => state.perfiles.selectedPerfilId);
  const perfilActual = perfiles.find((perfil) => perfil.id === selectedPerfilId);
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
              console.log(selectedPerfilId)
              setUserId(resposta.user.id);
          }
          else {
            console.log("error");
          }
    }
    catch {
      alert("Catch");
    }
  };
  
  useEffect(() => {
    obtUser();
  }, [])
  
  
  const logOut = (e)=> {

    e.preventDefault();


    fetch ("http://127.0.0.1:8000/api/logout",{
    
     headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '  + authToken,
        //"Access-Control-Allow-Origin": "*" 

    },
    method: "POST",
    //body: JSON.stringify({email: email, password: password})
    })
    .then ( data => data.json() )
    .then (resposta => { 
        
            
            if (resposta.success == true )
            {
                console.log(resposta); 
                setAuthToken("");
                localStorage.setItem('authToken', "");
              
            }
            
        } ) 
    .catch((data) => {
        
    })


}
  useEffect(() => {
    // seleccionar todos los elementos <a> del sidebar
    var sidebarIcons = document.querySelectorAll('.sidebar-navigation ul li');

    // agregar un evento click a cada elemento <a>
    sidebarIcons.forEach(function(icon) {
      icon.addEventListener('click', function(event) {
        event.preventDefault(); // evitar que se siga el enlace
        // eliminar la clase .active de todos los elementos <a>
        sidebarIcons.forEach(function(icon) {
          icon.classList.remove('active');
        });
        // agregar la clase .active al elemento <a> que se ha hecho clic
        this.classList.add('active');
      });
    });
    
  }, []);

  return (
    <div className="sidebar">
      <div className='sidebar-perfil'>
        {perfilActual && <Link to="/perfiles"><img src={perfilActual.url_avatar} alt=""/></Link>}
      </div>

      <nav className="sidebar-navigation">
        <ul>
          <li id="icon1"><FiSearch/></li>
          <Link to="/home"><li id="icon2"><RiHome2Line/></li></Link>
          <Link to="/Milista"><li id="icon3"><RiFileListLine/></li></Link>
          <Link to="/MisDescargas"><li id="icon4"><BiCloudDownload/></li></Link>
          <Link to="/MiCuenta"><li id="icon5"><MdOutlineManageAccounts/></li></Link>
          <Link to="/SubirContenido"><li id="icon5"><BsPlusCircle/></li></Link>
        </ul>
      </nav>

      <nav className="sidebar-navigation sidebar-logout">
        <ul>
          <li id="icon6"><FiLogOut onClick={logOut}/></li>
        </ul>
      </nav>
    </div>
  )
}
