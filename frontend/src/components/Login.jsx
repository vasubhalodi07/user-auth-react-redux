import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux";

const Login = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.login.response);

  const [userInput, setUserInput] = useState({ email: "", password: "" });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUserInput((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.email && userInput.password) {
      dispatch(userLogin(userInput));
      setUserInput({ username: "", email: "", password: "" });
    } else {
      alert(
        "Please enter your email address or password from your account and try again."
      );
    }
  };

  return (
    <>
      <div className="center size">
        <div>
          <div className="center">Login</div> <br />
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              className="form-control"
              placeholder="email"
              onChange={handleInput}
              value={userInput.email}
              name="email"
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              onChange={handleInput}
              value={userInput.password}
              name="password"
            />
            <br />
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </form>
        </div>
      </div>
      <div className="center"> {response != null ? response : ""} </div>
    </>
  );
};

export default Login;
