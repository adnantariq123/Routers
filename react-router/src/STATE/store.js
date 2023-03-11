import {configureStore} from '@reduxjs/toolkit';

import pokemonSlice from './SubStates/Pokemon';

export const GlobalStore =configureStore({
    reducer: {
        Pokemon:pokemonSlice
    }
    
})