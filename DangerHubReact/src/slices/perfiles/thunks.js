import { startLoadingPerfiles, setError, setPerfiles, setPerfil, setSelectedPerfilId } from "./perfilesSlice";
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
        let url = "http://equip09.insjoaquimmir.cat/api/perfiles" ;

        

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if(resposta.success == true) {
            
            dispatch(setPerfiles(resposta.data));
            
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
    const url = "http://equip09.insjoaquimmir.cat/api/perfiles";

    const data   = await fetch(url, headers);
    
    const resposta = await data.json();

    if (resposta.success == true) {
        dispatch(getPerfiles(authToken));
    } else {
        alert('Solo puedes tener como maximo 4 perfiles!');
        setError(resposta.message);
    }
  };
}

export const getPerfil = (id, authToken) => {
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
        const url = "http://equip09.insjoaquimmir.cat/api/perfiles/" + id

        const data = await fetch(url,  headers  );
        const resposta = await data.json();
        if (resposta.success == true) {
            dispatch(setPerfil(resposta.data));
            dispatch(setSelectedPerfilId(resposta.data.id))
           
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
      "http://equip09.insjoaquimmir.cat/api/perfiles/" + perfil.id + "?nombre=" + formulari.nombre +"&url_avatar=" + formulari.url_avatar,
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
        alert("Perfil Editat!");
    } else {
        setError(resposta.message);
    }
  };
}

export const delPerfil = (perfil, authToken) => {
    return async (dispatch, getState) => {

        dispatch(startLoadingPerfiles());

        const data = await fetch(
            "http://equip09.insjoaquimmir.cat/api/perfiles/" + perfil.id,
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

        if (resposta.success == true) {
            dispatch (getPerfiles(authToken))
        } else {
            setError(resposta.message);
        }
    };
};

