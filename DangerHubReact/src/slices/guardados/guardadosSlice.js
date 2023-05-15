import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    guardados: [],
    guardado: {
        id_contenido:"",
        id_perfil: "",
        id_lista: "",
    },
    isLoading: false,
    error: "",
}

export const guardadosSlice = createSlice({
    name: "guardados",
    initialState,
    reducers: {
        startLoadingGuardados: (state) => {
            state.isLoading = true;
        },

        setGuardados: (state, action ) => {
            state.guardados = action.payload
            state.isLoading = false
        },

        setGuardado: (state, action ) => {
            state.guardado = action.payload
            state.isLoading = false
        },

        setError: (state,action) => {
            state.error = action.payload
        },
    }
});

export const { startLoadingGuardados, setGuardados, setGuardado, setError } = guardadosSlice.actions;
export default guardadosSlice.reducer