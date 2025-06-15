import LoginStatus from "../auth/LoginStatus";
import useCounterStore from "../counter/store";

const NavBar = () => {
  const  counter  = useCounterStore(s=> s.counter);

  console.log("render navbar");

  return (
    <nav>
      <span>{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
