import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async () => {
    const res = await axios.get("http://localhost:8080/users/all");
    return res.data;
  }
);

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.users = action.payload
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchAllUsers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default userSlice.reducer;
