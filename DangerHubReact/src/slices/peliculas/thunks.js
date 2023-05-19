import { startLoadingPeliculas, setError, setPeliculas, setPeliculasGuardadas, setPelicula, setGuardado, setTusPeliculas, setPages, setFilter } from "./peliculasSlice";
import { useNavigate } from "react-router-dom";

export const getPeliculas = (authToken) => {
    return async (dispatch, getState) => {
        let filter = getState().peliculas.filter;
        dispatch(startLoadingPeliculas());

        const headers = {

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET",
        };
        let url = "http://127.0.0.1:8000/api/peliculas" ;

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if(resposta.success == true) {
            
            dispatch(setPeliculas(resposta.data));
            
        }else {
            setError(resposta.message);
        }
    }
}
export const getPeliculasGuardadas = (authToken, id_lista) => {
    return async (dispatch, getState) => {
        let filter = getState().peliculas.filter;
        dispatch(startLoadingPeliculas());
        const headers = {

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET",
        };
        let url = "http://127.0.0.1:8000/api/contenidosGuardados/" + id_lista ;

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if(resposta.success == true) {
            
            dispatch(setPeliculasGuardadas(resposta.data));
            console.log(resposta.data)
            
        }else {
            setError(resposta.message);
        }
    }
}
export const getTusPeliculas = (authToken, userId) => {
    return async (dispatch, getState) => {
        console.log(userId);
        let filter = getState().peliculas.filter;
        dispatch(startLoadingPeliculas());

        const headers = {

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET",
        };
        let url = "http://127.0.0.1:8000/api/peliculas/user/" + userId ;

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if(resposta.success == true) {
            
            dispatch(setTusPeliculas(resposta.data.contenidos));
            console.log(resposta.data.contenidos);
            
        }else {
            setError(resposta.message);
        }
    }
}

// export const addPost = (formulari, authToken) => {
    export const addContenido = (data2, authToken) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPeliculas());

    // let { body, upload, latitude, longitude, visibility } = formulari;
    let { titulo, descripcion, descripcionLarga, url_imagen, url_video, duracion, fecha_lanzamiento, id_categoria } = data2;
    const formData = new FormData();
        
    formData.append("titulo", titulo);
    formData.append("descripcion", descripcion);
    formData.append("descripcionLarga", descripcionLarga);
    formData.append("url_imagen", url_imagen);
    formData.append("url_video", url_video);
    formData.append("duracion", duracion);
    formData.append("fecha_lanzamiento", fecha_lanzamiento);
    formData.append("id_categoria", id_categoria);
    const headers = {

        headers: {
            Accept: "application/json",
            Authorization: "Bearer " + authToken,
        },
        method: "POST",
        body: formData
    };
    const url = "http://127.0.0.1:8000/api/contenidos";

    const data = await fetch(url, headers);
    
    const resposta = await data.json();

    if (resposta.success == true) {
        alert("Contenido Creado");
    } else {
        setError(resposta.message);
    }
  };
}

export const getPelicula = (authToken, id, id_lista, selectedPerfilId) => {
    return async (dispatch, getState) => {

        dispatch(startLoadingPeliculas());

        const headers = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET",
        };
        const url = "http://127.0.0.1:8000/api/contenidos/" + id

        const data = await fetch(url,  headers  );
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setPelicula(resposta.data));
            dispatch(testGuardados(authToken, id, id_lista, selectedPerfilId));

        } else {
            dispatch(setError(resposta.message));
        }
    };
}

// export const editPost = (formulari, authToken, post) => {
//     return async (dispatch, getState) => {

//     let { body, upload, latitude, longitude, visibility } = formulari;
//     const formData = new FormData();
        
//     formData.append("body", body);
//     formData.append("upload", upload);
//     formData.append("latitude", latitude);
//     formData.append("longitude", longitude);
//     formData.append("visibility", visibility);

//     const data = await fetch(
//       "https://backend.insjoaquimmir.cat/api/posts/" + post.id,
//       {
//         headers: {
//           Accept: "application/json",
//           Authorization: "Bearer " + authToken,
//         },
//         method: "POST",
//         body: formData,
//       }
//     );
//     const resposta = await data.json();

//     if (resposta.success == true) {
//         console.log("Post Editat");
//     } else {
//         setError(resposta.message);
//     }
//   };
// }

// export const delPost = (post, authToken) => {
//     return async (dispatch, getState) => {

//         dispatch(startLoadingPosts());

//         const data = await fetch(
//             "https://backend.insjoaquimmir.cat/api/posts/" + post.id,
//             {
//                 headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//                 Authorization: "Bearer " + authToken,
//                 },
//                 method: "DELETE",
//             }
//         );
//         const resposta = await data.json();

//         if (resposta.success == true) {
//             dispatch (getPosts(0, authToken))
//         }
//     };
// };

export const testGuardados = (authToken, id, id_lista, selectedPerfilId) => {
    return async (dispatch, getState) => {
        const headers = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "POST", 
        };
        const url = "http://127.0.0.1:8000/api/contenidos/" + id + "/guardar/" + id_lista + "/" + selectedPerfilId

        const data = await fetch(url,  headers  );
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setGuardado(false));
            const headers = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + authToken,
                },
                method: "DELETE",
            };
            const url = "http://127.0.0.1:8000/api/contenidos/" + id + "/guardar/" + id_lista + "/" + selectedPerfilId
    
            const data = await fetch(url,  headers  );
            const resposta = await data.json();

        } else {
            dispatch(setGuardado(true));
        }
    };
}

export const guardarContenido = (authToken, id, id_lista, selectedPerfilId) => {
    return async (dispatch, getState) => {

        const headers = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "POST",
        };
        const url = "http://127.0.0.1:8000/api/contenidos/" + id + "/guardar/" + id_lista + "/" + selectedPerfilId

        const data = await fetch(url,  headers  );
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setGuardado(true));
            localStorage.setItem('guardado', 'true');
            alert("Contenido añadido a tu lista!");
        } else {
            dispatch(setGuardado(false));
        }
    };
}

export const quitarContenido = (authToken, id, id_lista, selectedPerfilId) => {
    return async (dispatch, getState) => {

        const headers = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "DELETE",
        };
        const url = "http://127.0.0.1:8000/api/contenidos/" + id + "/guardar/" + id_lista + "/" + selectedPerfilId

        const data = await fetch(url,  headers  );
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setGuardado(false));
            localStorage.removeItem('guardado');
            alert("Contenido eliminado de tu lista!");
        }
    };
}