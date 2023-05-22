import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    perfiles: [],
    perfil: {
        id: "",
        nombre: "",
        url_avatar: "",
    },
    selectedPerfilId: null,
    isLoading: false,
    error: "",
}

export const perfilesSlice = createSlice({
    name: "perfiles",
    initialState,
    reducers: {
        startLoadingPerfiles: (state) => {
            state.isLoading = true;
        },

        setPerfiles: (state, action ) => {
            state.perfiles = action.payload
            state.isLoading = false
        },

        setPerfil: (state, action ) => {
            state.perfil = action.payload
            state.isLoading = false
        },
        setSelectedPerfilId: (state, action) => {
            state.selectedPerfilId = action.payload
        },
        setError: (state,action) => {
            state.error = action.payload
        },
    }
});

export const { startLoadingPerfiles, setPerfiles, setPerfil, setError, setSelectedPerfilId } = perfilesSlice.actions;
export default perfilesSlice.reducer