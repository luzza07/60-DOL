import { useContext } from "react";

import AuthContext from "../contexts/authContext";

const LoginStatus = () => {
  const { user, dispatch } = useContext(AuthContext);
  if (user)
    return (
      <>
        <div>
          <span>{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGIN", username: "Luzza " })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
