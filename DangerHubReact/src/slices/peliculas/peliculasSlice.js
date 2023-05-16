import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    peliculas: [],
    peliculasGuardadas: [],
    pelicula: {
        id:"",
        titulo: "",
        descripcion: "",
        url_imagen: "",
        url_video: "",
        duracion: "00:00:00",
        fecha_lanzamiento: "0000-00-00",
        id_categoria: null,
    },
    page: 1,
    pages: [],
    guardado: false,
    isLoading: false,
    error: "",
    filter: { titulo: "" },
}

export const peliculasSlice = createSlice({
    name: "peliculas",
    initialState,
    reducers: {
        startLoadingPeliculas: (state) => {
            state.isLoading = true;
        },

        setPeliculas: (state, action ) => {
            state.peliculas = action.payload
            state.isLoading = false
        },
        setPeliculasGuardadas: (state, action ) => {
            state.peliculasGuardadas = action.payload
            state.isLoading = false
        },

        setPelicula: (state, action ) => {
            state.pelicula = action.payload
            state.isLoading = false
        },
        setGuardado: (state, action ) => {
            state.guardado = action.payload
        },
        setError: (state,action) => {
            state.error = action.payload
        },

        setPage: (state,action) => {
            state.page = action.payload
        },

        setPages: (state,action) => {
            state.pages = action.payload
        },

        setFilter: (state,action) => {
            state.filter = action.payload;
        },
    }
});

export const { startLoadingPeliculas, setPeliculas, setPeliculasGuardadas, setPelicula, setGuardado, setError, setPage, setPages, setFilter } = peliculasSlice.actions;
export default peliculasSlice.reducer