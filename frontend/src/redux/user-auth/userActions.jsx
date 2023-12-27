import axios from "axios";
import {
  REGISTER_API_REQUEST,
  REGISTER_SET_RESPONSE,
  REGISTER_RESET_RESPONSE,
  LOGIN_API_REQUEST,
  LOGIN_SET_RESPONSE,
  LOGIN_STATUS,
  LOGOUT_USER,
} from "./userType";

// Register
export const requestRegisterApi = (request) => {
  return {
    type: REGISTER_API_REQUEST,
    payload: request,
  };
};

export const setRegisterResponse = (response) => {
  return {
    type: REGISTER_SET_RESPONSE,
    payload: response,
  };
};

export const resetRegisterResponse = () => {
  return {
    type: REGISTER_RESET_RESPONSE,
  };
};

// Login
export const requestLoginApi = (request) => {
  return {
    type: LOGIN_API_REQUEST,
    payload: request,
  };
};

export const setLoginResponse = (response) => {
  return {
    type: LOGIN_SET_RESPONSE,
    payload: response,
  };
};

export const setLoginStatus = (record) => {
  return {
    type: LOGIN_STATUS,
    payload: record,
  };
};

// Logout
export const userLogout = () => {
  localStorage.removeItem("token");
  return {
    type: LOGOUT_USER,
  };
};

// API Calling
export const userRegister = (data) => {
  return (dispatch) => {
    dispatch(requestRegisterApi(true));
    axios
      .post("http://localhost:8000/api/user/register", {
        name: data.username,
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        const user = response.data;
        dispatch(setRegisterResponse(user));
        dispatch(requestRegisterApi(false));
        setTimeout(() => {
          dispatch(resetRegisterResponse());
        }, 3000);
      })
      .catch((err) => {
        const error = err.message;
        dispatch(setRegisterResponse(error));
        dispatch(requestRegisterApi(false));
      });
  };
};

export const userLogin = (data) => {
  return (dispatch) => {
    dispatch(requestLoginApi(true));
    axios
      .post("http://localhost:8000/api/user/login", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        const user = response.data;
        if (user.resp.length != 0) {
          localStorage.setItem("token", user.token);
          dispatch(setLoginStatus(user.loginStatus));
          dispatch(setLoginResponse(user.result));
        } else {
          dispatch(setLoginResponse("error"));
        }
        dispatch(requestLoginApi(false));
      })
      .catch((error) => {
        dispatch(setLoginResponse(error.message));
        dispatch(requestLoginApi(false));
      });
  };
};
