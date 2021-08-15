import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchJokes = createAsyncThunk("fetchJokes", async () => {
  const response = await axios.get(
    "https://official-joke-api.appspot.com/jokes/ten"
  );
  return response.data;
});

const initialState = {
  loading: false,
  error: null,
  jokes: [],
};

export const jokesSlice = createSlice({
  name: "jokes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJokes.pending, (state, action) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchJokes.fulfilled, (state, action) => {
        const data = action.payload;
        return {
          ...state,
          loading: false,
          jokes: data,
        };
      })
      .addCase(fetchJokes.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default jokesSlice.reducer;
