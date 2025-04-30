import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async () => {
    const res = await axios.get("http://localhost:8080/users/all");
    return res.data;
  }
);

export const createUser = createAsyncThunk(
  "users/createUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:8080/users/create", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Có lỗi xảy ra");
    }
  }
);

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
  isCreating: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Xử lý fetchAllUsers
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
      })
      // Xử lý createUser
      .addCase(createUser.pending, (state) => {
        state.isCreating = true;
      })
      .addCase(createUser.fulfilled, (state) => {
        state.isCreating = false;
      })
      .addCase(createUser.rejected, (state) => {
        state.isCreating = false;
        state.isError = true;
      });
  },
});

export default userSlice.reducer;
