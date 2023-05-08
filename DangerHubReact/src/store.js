import { configureStore } from '@reduxjs/toolkit'

import peliculasSlice from './slices/peliculas/peliculasSlice'

/**
 * The Redux store instance.
 * @type {Store}
 */

export const store = configureStore({

  reducer: {
    peliculas: peliculasSlice
    
  },  
})