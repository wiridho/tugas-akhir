import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiConfig from "../../api/apiConfig";

const initialState = {
  isLoading: false,
  hasError: false,
  userId: "",
  value: [],
  token: [],
};

export const handleRegister = createAsyncThunk(
  "auth/register",
  async (params) => {
    try {
      const response = await axios.post(
        `${apiConfig.baseUrl}/authentication/register`,
        params
      );
      console.log("response register", response);
      let userId = response.data.data._id;
      localStorage.setItem("userId", JSON.stringify(userId));
    } catch (error) {
      console.error(error);
    }
  }
);

export const verifyRegisterOtp = createAsyncThunk(
  "auth/verify",
  async (otp) => {
    try {
      const userId = JSON.parse(localStorage.getItem("userId"));
      console.log("userid", userId);
      const response = await axios.post(
        `${apiConfig.baseUrl}/authentication/otp/email/verify`,
        { otp, userId }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
);

export const handleLogin = createAsyncThunk("auth/login", async (params) => {
  try {
    console.log(params);
    const response = await axios.post(
      `${apiConfig.baseUrl}/authentication/login?action=email-otp`,
      params
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
});

export const verifyLoginOtp = createAsyncThunk(
  "auth/verifyLoginOtp",
  async (params) => {
    try {
      console.log("params", params);
      const response = await axios.post(
        `${apiConfig.baseUrl}/authentication/login?action=login`,
        params
      );

      localStorage.setItem("token", JSON.stringify(response.data.data));
      return response?.data.data;
      // let accessTokens = response.data.data.accessToken;
      // let refreshTokens = response.data.data.refreshToken;
      // const accessToken = localStorage.setItem(
      //   "accessToken",
      //   JSON.stringify(accessTokens)
      // );
      // const refreshToken = localStorage.setItem(
      //   "accessToken",
      //   JSON.stringify(refreshTokens)
      // );
      // return response.data.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { email, token } = action.payload;
      state.email = email;
      state.token = token;
    },
    logOut: (state) => {
      state.value = [];
      state.token = [];
    },
  },
  extraReducers: {
    // Register
    [handleRegister.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [handleRegister.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.hasError = false;
    },
    [handleRegister.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },

    // Verify Register
    [verifyRegisterOtp.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [verifyRegisterOtp.fulfilled]: (state) => {
      state.isLoading = false;
      state.hasError = false;
    },
    [verifyRegisterOtp.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },

    // Login
    [handleLogin.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [handleLogin.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.hasError = false;
      state.value = payload;
    },
    [handleLogin.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },

    //Verify Login OTP
    [verifyLoginOtp.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [verifyLoginOtp.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.hasError = false;
      state.token = payload;
    },
    [verifyLoginOtp.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
