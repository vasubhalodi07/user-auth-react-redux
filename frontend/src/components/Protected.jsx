import { useSelector } from "react-redux";

const Protected = () => {
  const loginStatus = useSelector((state) => state.login.loginStatus);

  return (
    <div>
      {loginStatus ? (
        <div className="center size"> You are Authenticated </div>
      ) : (
        <div className="center size"> Protected Route </div>
      )}
    </div>
  );
};

export default Protected;
