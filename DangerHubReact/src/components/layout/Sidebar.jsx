import React, { useEffect, useState, useContext} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
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

  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const pathname = location.pathname;
    setActiveLink(pathname);
  }, [location]);
  
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


    fetch ("http://equip09.insjoaquimmir.cat/api/logout",{
    
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
              navigate("/login");
            }
            
        } ) 
    .catch((data) => {
        
    })
  }

  return (
    <div className="sidebar">
      <div className='sidebar-perfil'>
        {perfilActual && <Link to="/perfiles"><img src={perfilActual.url_avatar} alt=""/></Link>}
      </div>

      <nav className="sidebar-navigation">
        <ul>
          <li id="icon1"><FiSearch/></li>

          <li id="icon2" className={activeLink === '/home' ? 'active' : ''}>
            <Link to="/home"><RiHome2Line/></Link>
          </li>
          <li id="icon4" className={activeLink === '/SubirContenido' ? 'active' : ''}>
            <Link to="/SubirContenido"><BsPlusCircle/></Link>
          </li>

        </ul>
      </nav>

      <nav className="sidebar-navigation sidebar-logout">
        <ul>
          <li id="icon5"><FiLogOut onClick={logOut}/></li>
        </ul>
      </nav>
    </div>
  )
}
