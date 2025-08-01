import useAuthStore from "./store";

const LoginStatus = () => {
  const { user, login, logout } = useAuthStore();
  if (user)
    return (
      <>
        <div>
          <span>{user}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login("Luzza ")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
