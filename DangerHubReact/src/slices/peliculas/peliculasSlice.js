import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    peliculas: [],
    pelicula: {
        id: null,
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

        setPelicula: (state, action ) => {
            state.pelicula = action.payload
            state.isLoading = false
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

export const { startLoadingPeliculas, setPeliculas, setPelicula, setError, setPage, setPages, setFilter } = peliculasSlice.actions;
export default peliculasSlice.reducer