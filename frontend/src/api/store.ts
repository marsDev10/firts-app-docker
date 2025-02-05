/*En este archvio se manejará el estado global de la aplicación*/
import { configureStore } from '@reduxjs/toolkit';//Función para configurar el store
import { apiSlice } from './apiSlice';//

//Reducers
/* import ProductosReducer from "../pages/Productos/services/newProductosSlice" */

//Middlewares
//import { Middlewares } from './middlewares';

export const store = configureStore({
  reducer: {
    /*Estado para centralizar peticiones*/
    [apiSlice.reducerPath]: apiSlice.reducer,
    // Aquí podrías agregar más reducers si los necesitas
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware, 
    ),
    devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch