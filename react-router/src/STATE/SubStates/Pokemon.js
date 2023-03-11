import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetPokemon = createAsyncThunk(
  "PokemonGGG/getData",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const pokemonSlice = createSlice({
  name: "PokemonGGG",
  initialState: {
    PokiData: [],
    isSuccess: false,
    message: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [GetPokemon.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [GetPokemon.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.PokiData = payload;
      state.isSuccess = true;
    },
    [GetPokemon.pending]: (state, { payload }) => {
      state.loading = false;
      state.message = payload;
      state.isSuccess = false;
    },
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = pokemonSlice.actions

export default pokemonSlice.reducer;
