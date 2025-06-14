import useAuth from "../hooks/useAuth";

const LoginStatus = () => {
  const { user, dispatch } = useAuth();
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
