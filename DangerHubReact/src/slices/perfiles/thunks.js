import { startLoadingPerfiles, setError, setPerfiles, setPerfil } from "./perfilesSlice";
import { useNavigate } from "react-router-dom";

export const getPerfiles = (authToken) => {
    return async (dispatch, getState) => {
        let filter = getState().peliculas.filter;
        dispatch(startLoadingPerfiles());

        const headers = {

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET",
        };
        let url = "http://127.0.0.1:8000/api/perfiles" ;

        

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if(resposta.success == true) {
            
            dispatch(setPerfiles(resposta.data));
            console.log(resposta.data);
            
        }else {
            setError(resposta.message);
        }
    }
}

    export const addPerfil = (data2, authToken) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPerfiles());

    let { nombre, url_avatar } = data2;
    const formData = new FormData();
        
    formData.append("nombre", nombre);
    formData.append("url_avatar", url_avatar);
    

    const headers = {

        headers: {
            Accept: "application/json",
            Authorization: "Bearer " + authToken,
        },
        method: "POST",
        body: formData
    };
    const url = "http://127.0.0.1:8000/api/perfiles";

    const data = await fetch(url, headers);
    
    const resposta = await data.json();

    if (resposta.success == true) {
        console.log("Perfil Creat");
        dispatch(getPerfiles(authToken));
    } else {
        setError(resposta.message);
    }
  };
}

export const getPerfil = (id_perfil, authToken) => {
    return async (dispatch, getState) => {

        dispatch(startLoadingPerfiles());

        const headers = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET",
        };
        const url = "http://127.0.0.1:8000/api/perfiles/" + id_perfil

        const data = await fetch(url,  headers  );
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setPerfil(resposta.data));
           
        } else {
            dispatch(setError(resposta.message));
        }
    };
}

export const editPerfil = (formulari, authToken, perfil) => {
    return async (dispatch, getState) => {

    let { nombre, url_avatar } = formulari;
    const formData = new FormData();
        
    formData.append("nombre", nombre);
    formData.append("url_avatar", url_avatar);


    const data = await fetch(
      "http://127.0.0.1:8000/api/perfiles/" + perfil.id,
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + authToken,
        },
        method: "PUT",
        body: formData,
      }
    );
    const resposta = await data.json();

    if (resposta.success == true) {
        console.log("Perfil Editat");
    } else {
        setError(resposta.message);
    }
  };
}

export const delPerfil = (perfil, authToken) => {
    return async (dispatch, getState) => {

        dispatch(startLoadingPosts());

        const data = await fetch(
            "https://backend.insjoaquimmir.cat/api/posts/" + perfil.id,
            {
                headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
                },
                method: "DELETE",
            }
        );
        const resposta = await data.json();
        console.log(resposta);

        if (resposta.success == true) {
            dispatch (getPerfiles(authToken))
        }
    };
};

