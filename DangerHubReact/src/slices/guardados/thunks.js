import { startLoadingGuardados, setGuardados, setError } from "../guardados/guardadosSlice";
import { useNavigate } from "react-router-dom";

export const getPeliculasGuardadas = (authToken, id_lista) => {
    return async (dispatch, getState) => {
        let filter = getState().guardados.filter;
        dispatch(startLoadingGuardados());
        console.log(id_lista);
        const headers = {

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET",
        };
        let url = "http://equip09.insjoaquimmir.cat/api/contenidosGuardados/"+ id_lista;

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if(resposta.success == true) {
            
            dispatch(setGuardados(resposta.data));
            console.log(resposta.data);
            
        }else {
            setError(resposta.message);
        }
    }
}

