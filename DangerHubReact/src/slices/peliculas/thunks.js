import { startLoadingPeliculas, setError, setPeliculas, setPelicula, setPages, setFilter } from "./peliculasSlice";
import { useNavigate } from "react-router-dom";

export const getPeliculas = (authToken,page = 0) => {
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
        let url =  page > 0 ? 
        "https://backend.insjoaquimmir.cat/api/posts?paginate=1&page=" + page 
        : 
        "http://127.0.0.1:8000/api/peliculas" ;

        let primsimbolo = page > 0 ? "&" : "?";

        let body = filter.body != "" ? "body="+filter.body : "";
        
        let author = filter.author != "" ? "author="+filter.author : "";
        
        if (body != "" && author != ""){
            url = url+primsimbolo+body+"&"+author;
        }

        else if (author != ""){
            url = url+primsimbolo+author;
        }

        else if (body != "" ){
            url = url+primsimbolo+body;
        }

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if(resposta.success == true) {
            if (page > 0) {
                dispatch(setPeliculas(resposta.data));
                console.log(resposta.data);
            } else {
                dispatch(setPeliculas(resposta.data));
            }
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
    let { titulo, descripcion, url_imagen, url_video, duracion, fecha_lanzamiento, id_categoria } = data2;
    const formData = new FormData();
        
    formData.append("titulo", titulo);
    formData.append("descripcion", descripcion);
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
        console.log("Contenido Creado");
    } else {
        setError(resposta.message);
    }
  };
}

export const getPelicula = (id, authToken) => {
    return async (dispatch, getState) => {

        dispatch(startLoadingPosts());

        const headers = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET",
        };
        const url = "https://backend.insjoaquimmir.cat/api/posts/" + id

        const data = await fetch(url,  headers  );
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setPost(resposta.data));
            dispatch(setLikes(resposta.data.likes_count));
            dispatch(testLikes(id, authToken));

        } else {
            dispatch(setError(resposta.message));
        }
    };
}

export const editPost = (formulari, authToken, post) => {
    return async (dispatch, getState) => {

    let { body, upload, latitude, longitude, visibility } = formulari;
    const formData = new FormData();
        
    formData.append("body", body);
    formData.append("upload", upload);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("visibility", visibility);

    const data = await fetch(
      "https://backend.insjoaquimmir.cat/api/posts/" + post.id,
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + authToken,
        },
        method: "POST",
        body: formData,
      }
    );
    const resposta = await data.json();

    if (resposta.success == true) {
        console.log("Post Editat");
    } else {
        setError(resposta.message);
    }
  };
}

export const delPost = (post, authToken) => {
    return async (dispatch, getState) => {

        dispatch(startLoadingPosts());

        const data = await fetch(
            "https://backend.insjoaquimmir.cat/api/posts/" + post.id,
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
            dispatch (getPosts(0, authToken))
        }
    };
};

export const testLikes = (id, authToken) => {
    return async (dispatch, getState) => {
        
        const headers = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "POST",
        };
        const url = "https://backend.insjoaquimmir.cat/api/posts/" + id + "/likes"

        const data = await fetch(url,  headers  );
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setLiked(false));
            console.log('liked False')
            const headers = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + authToken,
                },
                method: "DELETE",
            };
            const url = "https://backend.insjoaquimmir.cat/api/posts/" + id + "/likes"
    
            const data = await fetch(url,  headers  );
            const resposta = await data.json();

        } else {
            dispatch(setLiked(true));
            console.log("Liked");
        }
    };
}

export const like = (id, authToken, likes) => {
    return async (dispatch, getState) => {

        const headers = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "POST",
        };
        const url = "https://backend.insjoaquimmir.cat/api/posts/" + id + "/likes"

        const data = await fetch(url,  headers  );
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setLiked(true));
            dispatch(setLikes(likes + 1));
        } else {
            dispatch(setLiked(false));
        }
    };
}

export const unlike = (id, authToken, likes) => {
    return async (dispatch, getState) => {

        const headers = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "DELETE",
        };
        const url = "https://backend.insjoaquimmir.cat/api/posts/" + id + "/likes"

        const data = await fetch(url,  headers  );
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setLiked(false));
            dispatch(setLikes(likes - 1));
        }
    };
}