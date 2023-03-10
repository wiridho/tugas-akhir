import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiConfig from "../../api/apiConfig";

const initialState = {
  isLoading: false,
  hasError: false,
  value: [],
};

export const handleRegister = createAsyncThunk(
  "auth/register",
  async (params) => {
    try {
      const response = await axios.post(
        `${apiConfig.baseUrl}/authentication/register`,
        params
      );
      let userId = response.data.data._id;
      localStorage.setItem("userId", JSON.stringify(userId));
    } catch (error) {
      console.error(error);
    }
  }
);

export const handleVerify = createAsyncThunk("auth/verify", async (otp) => {
  try {
    const userId = JSON.parse(localStorage.getItem("userId"));
    const response = await axios.post(
      `${apiConfig.baseUrl}/authentication/otp/email/verify`,
      { otp, userId }
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setCredentials: (state, action) => {
    //   const { email, token } = action.payload;
    //   state.email = email;
    //   state.token = token;
    // },
    logOut: (state) => {
      state.email = null;
      state.token = null;
    },
  },
  extraReducers: {
    [handleRegister.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [handleRegister.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.hasError = false;
      state.value = payload;
    },
    [handleRegister.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    // Verify
    [handleVerify.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [handleVerify.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.hasError = false;
    },
    [handleVerify.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
