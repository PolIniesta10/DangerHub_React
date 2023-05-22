import React, { useState, useContext } from 'react'
import Anabelle from'/imagenes/DHUB.png';
import { UserContext } from '../userContext';
import { useNavigate } from 'react-router-dom';

import { useForm } from "react-hook-form"; 
import { useLogin } from '../hooks/useLogin';

export const Register = ({ setLogin }) => {

    let [ error, setError2] = useState("");
    let { usuari, setUsuari, authToken, setAuthToken } = useContext(UserContext);
    const navigate = useNavigate();
    const { checkAuthToken } = useLogin(); 

    const onSubmit = data => handleRegister(data);
    const { register, handleSubmit , formState: { errors }} = useForm();

    const handleRegister = async (data) => {
        let name = data.name;
        let email = data.email;
        let password = data.password;
        let password2 = data.password2;
        let id_suscripcion = data.id_suscripcion;

        if (password !== password2)
        {
            alert ("Els passwords han de coincidir")
        }

        fetch("http://equip09.insjoaquimmir.cat/api/register", {
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ name: name, email: email, password: password, id_suscripcion: id_suscripcion})

        })
        .then((data) => data.json())
        .then((resposta) => {
            if (resposta.success === true) {
            //alert(resposta.authToken);
                setAuthToken(resposta.authToken);
            }
            else
            { 
                setError2(resposta.message);
            }
        })
        .catch((data) => {
            alert("Catchch");
          });

        navigate('/');
    }
    
  return (
    <>
    <div className="welcome_container" style={{opacity:"0.25",backgroundImage: "url(/imagenes/Welcome2.jpg)"}}></div>

    <div className="login_section">
        <div x-show="isLoginPage" className="register_box">
            <div><img className="register_logo" src={Anabelle} alt="Imagen"/></div>

            <div className="login_content register_content">
                <h1>Registrate</h1>

                <div className="login-input">
                        <input {...register("name", {
                            required: "Aquest camp és obligatori",
                            minLength: {
                                value: 4,
                                message: "El nom ha de contenir minim 4 caràcters"
                            },
                        })} type="text"  placeholder="Name" style={{paddingTop:"20px"}} />
                </div>

                {errors.name && <p className='errores'>{errors.name.message}</p>}

                <div className="login-input">
                    <input {...register("email", {
                            required: "Aquest camp és obligatori",
                        })} type="text" placeholder="Email" style={{paddingTop:"20px"}}/>
                </div>

                {errors.email && <p className='errores'>{errors.email.message}</p>}

                <div className="login-input">
                    <input 
                        {...register("password", {
                            required: "Aquest camp és obligatori",
                            minLength: {
                                value: 8,
                                message: "La contrasenya ha de tenir al menys 8 caràcters"
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/,
                                message:
                                "La contrasenya ha de contenir al menys una minúscula, una majúscula, un número i un caracter especial"
                            }
                        })} type="password" placeholder="Password" style={{paddingTop:"20px"}}/>
                </div>

                {errors.password && <p className='errores'>{errors.password.message}</p>}

                <div className="login-input">
                    <input 
                        {...register("password2", {
                            required: "Aquest camp és obligatori",
                            minLength: {
                                value: 8,
                                message: "La contrasenya ha de tenir al menys 8 caràcters"
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/,
                                message:
                                "La contrasenya ha de contenir al menys una minúscula, una majúscula, un número i un caracter especial"
                            }
                        })} type="password" placeholder="Repeat Password" style={{paddingTop:"20px"}}/>
                </div>

                {errors.password2 && <p className='errores'>{errors.password2.message}</p>}

                <div className="perfilesAdd-perfil-inputs-box" style={{width: "auto"}}>     
                    <fieldset className="contentAdd-perfil-input" >
                        <legend>Tipo de suscripcion</legend>    

                        <div className='register_fieldset'>

                            <input {...register("id_suscripcion")} type="radio" id="Básica" name="id_suscripcion" value="1" defaultChecked/>
                            <label htmlFor="Básica">Básica</label>
                        
                            <input {...register("id_suscripcion")} type="radio" id="Básica_HD" name="id_suscripcion" value="2"/>
                            <label htmlFor="Básica_HD">Básica HD</label>
                        
                            <input {...register("id_suscripcion")} type="radio" id="Estandár" name="id_suscripcion" value="3"/>
                            <label htmlFor="Estandár">Estandár</label>

                            <input {...register("id_suscripcion")} type="radio" id="Danger" name="id_suscripcion" value="4"/>
                            <label htmlFor="Danger">Danger</label>

                        </div>
                    </fieldset>
                </div>

                <button onClick={handleSubmit(onSubmit)} className="perfilesAdd-perfil-config-button confirm-button" style={{margin:"10% 0 0 0"}}>CREA COMPTE</button>
                <button onClick={ ()=> setLogin(true) } className="perfilesAdd-perfil-config-button" style={{margin:"2% 0 2% 0"}}>Ja registrat?</button>                    
            </div>
        </div>
    </div>
    </>
  )
}
