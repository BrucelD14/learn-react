import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function loginHandler(event) {
    event.preventDefault();

    const checkLogin = true;
    if (checkLogin) {
      // redirect
      navigate("/dashboard");
    }
  }

  return (
    <form onSubmit={loginHandler}>
      <input type="text" name="username" placeholder="username" />
      <input type="password" name="password" placeholder="password" />
      <button>Login</button>
    </form>
  );
}
