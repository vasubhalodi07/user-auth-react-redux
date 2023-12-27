import {
  REGISTER_API_REQUEST,
  REGISTER_RESET_RESPONSE,
  REGISTER_SET_RESPONSE,
  LOGIN_API_REQUEST,
  LOGIN_STATUS,
  LOGIN_SET_RESPONSE,
  LOGOUT_USER,
} from "./userType";

const registerState = {
  loading: false,
  response: null,
};

const loginState = {
  loading: false,
  response: null,
  loginStatus: localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null,
};

const registerReducer = (state = registerState, action) => {
  switch (action.type) {
    case REGISTER_API_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };

    case REGISTER_SET_RESPONSE:
      return {
        ...state,
        response: action.payload.result,
      };

    case REGISTER_RESET_RESPONSE:
      return {
        ...state,
        response: null,
      };

    default:
      return state;
  }
};

const loginReducer = (state = loginState, action) => {
  switch (action.type) {
    case LOGIN_API_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };

    case LOGIN_SET_RESPONSE:
      return {
        ...state,
        response: action.payload,
      };

    case LOGIN_STATUS:
      return {
        ...state,
        loginStatus: action.payload,
      };

    case LOGOUT_USER:
      return {
        ...state,
        loginStatus: null,
        response: null,
      };

    default:
      return state;
  }
};

export { registerReducer, loginReducer };
