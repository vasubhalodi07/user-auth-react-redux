import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../redux";

const Register = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.register.response);

  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUserInput((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.username && userInput.email && userInput.password) {
      dispatch(userRegister(userInput));
      setUserInput({ username: "", email: "", password: "" });
    } else {
      alert(
        "Please enter a username and email address for registration purpose."
      );
    }
  };

  return (
    <>
      <div className="center size">
        <div>
          <div className="center">Register</div> <br />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="username"
              onChange={handleInput}
              value={userInput.username}
              name="username"
            />
            <br />
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
              placeholder="password"
              onChange={handleInput}
              value={userInput.password}
              name="password"
            />
            <br />
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
        <br />
      </div>

      <div className="center">
        {response != null ? "registeration done..." : ""}
      </div>
    </>
  );
};

export default Register;
