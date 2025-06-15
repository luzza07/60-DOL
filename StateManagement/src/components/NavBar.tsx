import LoginStatus from "../auth/LoginStatus";
import useCounterStore from "../counter/store";

const NavBar = () => {
  const { counter } = useCounterStore();
  return (
    <nav>
      <span>{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
