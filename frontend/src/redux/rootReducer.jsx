import { combineReducers } from "redux";
import { loginReducer, registerReducer } from "./user-auth/userReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
});

export default rootReducer;
