import { configureStore } from '@reduxjs/toolkit'

import peliculasSlice from './slices/peliculas/peliculasSlice'
import perfilesSlice from './slices/perfiles/perfilesSlice'

/**
 * The Redux store instance.
 * @type {Store}
 */

export const store = configureStore({

  reducer: {
    peliculas: peliculasSlice,
    perfiles: perfilesSlice
  },  
})