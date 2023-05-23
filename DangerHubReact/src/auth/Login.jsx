import React, { useEffect, useContext } from 'react'
import Anabelle from'/imagenes/anabelle.png';
import { UserContext } from '../userContext';
import { useLogin } from '../hooks/useLogin';
import { useForm } from "react-hook-form";

export const Login = ({ setLogin }) => {

  let { usuari, setUsuari, authToken, setAuthToken } = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const { doLogin, error, setError } = useLogin()
  const onSubmit = data => doLogin(data)
    
  return (
    <>
    <div className="welcome_container" style={{opacity:"0.15",backgroundImage: "url(/imagenes/Welcome2.jpg)"}}></div>

    <div className="login_section">
        <div x-show="!isLoginPage" className="login_box">
            <div ><img className="login_personaje" src={Anabelle} alt="Imagen"/></div>
            <div className="login_degradado"></div>
            <div className="login_fondo"></div>
            
            
            <div className="login_content">
                <h1>Iniciar sesión</h1>

                <div className="login-input">
                    <input type="text" placeholder="Email or username" {...register("email")} className="paddingTop20"/>
                </div>

                {errors.email && <p className='errores'>{errors.email.message}</p>}

                <div className="login-input">
                    <input type="password" placeholder="Password" {...register("password")} className="paddingTop20"/>
                </div>

                {errors.password && <p className='errores'>{errors.password.message}</p>}

                <div>
                    <a href="#" className="forget_password">Te has olvidado la contraseña?</a>
                </div>

                <button onClick={handleSubmit(onSubmit)} className="perfilesAdd-perfil-config-button confirm-button" style={{margin:"0"}}>Iniciar sesion</button>
                <button onClick={ ()=> setLogin(false) } className="perfilesAdd-perfil-config-button" style={{margin:"0"}}>Registrar-se</button>
            </div>
        </div>  
    </div>

   </>
  )
}
