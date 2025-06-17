import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          navigate("/");
        }}
      >
        <button>Submit</button>
      </form>
    </>
  );
};

export default ContactPage;
