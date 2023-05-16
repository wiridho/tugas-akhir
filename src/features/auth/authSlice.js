import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiConfig from "../../api/apiConfig";

const initialState = {
  isSuccess: false,
  isSuccessRegister: false,
  isLoading: false,
  hasError: false,
  isVerified: false,
  data: [],
  value: [],
  token: [],
  messageError: null,
};

// Handle Register
export const handleRegister = createAsyncThunk(
  "auth/register",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${apiConfig.baseUrl}/authentication/register`,
        params
      );
      if (response.status === 409) {
        console.log("message", response.data.message);
      }
      // if (!response.ok) {
      //   // const error = await response;
      //   return;
      // }
      // console.log("response ", response);
      return response.data.data;
    } catch (err) {
      if (err) {
        // const error = {
        //   message: err.response.data.message,
        //   statusCode: err.response.status,
        // };
        return rejectWithValue(err);
      }
    }
  }
);

export const verifyEmailAccount = createAsyncThunk(
  "auth/verify/email",
  async (params) => {
    try {
      const response = await axios.post(
        `${apiConfig.baseUrl}/authentication/verification/email/${params.userId}/${params.token}`
      );
      console.log("response verify", response);
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

// Handle Register OTP
export const verifyRegisterOtp = createAsyncThunk(
  "auth/verify",
  async (params, thunkApi) => {
    try {
      console.log("params", params);
      const response = await axios.post(
        `${apiConfig.baseUrl}/authentication/otp/email/verify`,
        params
      );
      console.log("response verify register", response);
    } catch (err) {
      if (err) {
        const message = err.response.data.message;
        return thunkApi.rejectWithValue(message);
      }
    }
  }
);

// Handle Resend Register OTP
export const resendRegisterOtp = createAsyncThunk("auth/resend", async () => {
  try {
    const userId = JSON.parse(localStorage.getItem("userId"));
    console.log();
    const response = await axios.post(
      `${apiConfig.baseUrl}/authentication/register/otp/resend`,
      { userId: userId }
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
});

// Handle Login
export const handleLogin = createAsyncThunk(
  "auth/login",
  async (params, thunkApi) => {
    try {
      console.log(params);
      const response = await axios.post(
        `${apiConfig.baseUrl}/authentication/login?action=email-otp`,
        params
      );
      console.log("response login", response.data.data);
      return response.data.data;
    } catch (err) {
      if (err) {
        // console.log(err.response);
        const message = err.response.data.message;
        return thunkApi.rejectWithValue(message);
      }
    }
  }
);

// Handle Login OTP
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

// Handle Resend Login OTP
export const resendLoginOtp = createAsyncThunk(
  "auth/resend/login",
  async () => {
    try {
      const userId = JSON.parse(localStorage.getItem("userId"));
      console.log();
      const response = await axios.post(
        `${apiConfig.baseUrl}/authentication/login/otp/resend`,
        { userId: userId }
      );
      console.log(response);
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
    [handleRegister.rejected]: (state, { payload }) => {
      // console.log("payload", payload);
      state.isLoading = false;
      state.hasError = true;
      state.messageError = payload;
    },

    // Verify Register OTP
    [verifyRegisterOtp.pending]: (state) => {
      state.isVerified = false;
      state.isLoading = true;
      state.hasError = false;
    },
    [verifyRegisterOtp.fulfilled]: (state) => {
      state.isVerified = true;
      state.isLoading = false;
      state.hasError = false;
    },
    [verifyRegisterOtp.rejected]: (state) => {
      state.isVerified = false;
      state.isLoading = false;
      state.hasError = true;
    },

    // Login
    [handleLogin.pending]: (state) => {
      state.isSuccess = false;
      state.isLoading = true;
      state.hasError = false;
    },
    [handleLogin.fulfilled]: (state, { payload }) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.hasError = false;
      state.value = payload;
    },
    [handleLogin.rejected]: (state, action) => {
      state.isSuccess = false;
      state.isLoading = false;
      state.hasError = true;
      state.messageError = action.payload;
    },

    //Verify Login OTP
    [verifyLoginOtp.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
      state.isSuccess = false;
    },
    [verifyLoginOtp.fulfilled]: (state, { payload }) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.hasError = false;
      state.token = payload;
    },
    [verifyLoginOtp.rejected]: (state) => {
      state.isSuccess = false;
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
