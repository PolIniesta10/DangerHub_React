import { UserContext } from "../userContext";
import { useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {

    let { usuari, setUsuari, authToken, setAuthToken, idUsuari, setIdUsuari } = useContext(UserContext);
    const navigate = useNavigate();

    const checkAuthToken = () => {

        let token = localStorage.getItem("authToken") || ""
        if (token == ""){
            setAuthToken("");
        }else{
            fetch("http://equip09.insjoaquimmir.cat/api/user",{
        
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            //"Access-Control-Allow-Origin": "*"
            "Authorization": "Bearer " + token,  
        },
        method: "GET",
            }).then( data => data.json() )
            .then((resposta) => {
                if (resposta.success === true) {
                    setAuthToken(token);
                    setUsuari(resposta.user.email);
                    setIdUsuari(resposta.user.id);
                    navigate("/perfiles");
                }else{
                    setAuthToken("");
                }
            });
        }
    };

    const doLogin = async (data) => {
        let email = data.email;
        let password = data.password;
    
        // Enviam dades a l'aPI i recollim resultat
        fetch ("http://equip09.insjoaquimmir.cat/api/login",{
            
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                //"Access-Control-Allow-Origin": "*"  
            },
            method: "POST",
            // body: JSON.stringify(formState)
            body: JSON.stringify({ email, password })
        }
        ).then( data => data.json() )
        .then (resposta => { 
            
                if (resposta.success == true )
                {
                    setAuthToken(resposta.authToken);
                    localStorage.setItem('authToken', resposta.authToken);
                    // setUsuari(resposta.user.email);
                    navigate("/perfiles");
                }
                else
                { 
                    setAuthToken("");
                    alert(resposta.message);
                }
            } ) 
        .catch((data) => {
            console.log("Network error")
        });
    }

    useEffect(() => {
        checkAuthToken();
    })
    return { doLogin, checkAuthToken };
}