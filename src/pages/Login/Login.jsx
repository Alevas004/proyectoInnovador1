import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../../Components/Login/LoginForm/LoginForm";
import "./Login.css";
import { startSessionThunk } from "../../store/slices/authSlice";
import { Navigate, useLocation } from "react-router-dom";

const Login = () => {
  const isLogged = useSelector((store) => store.authSlice.isLogged);
  const dispatch = useDispatch();
  const location = useLocation();
  const from = location.state?.from;

  const handleLogin = async (loginData) => {
    dispatch(startSessionThunk(loginData));
  };

  return (
    <div>
      <section>
        <h3>Welcome! Enter your email and password to continue</h3>
        <section>
          <h3>Test data</h3>
          <ul>
            <li>
              <em>Email:</em> aleinfocontent@gmail.com
            </li>
            <li>
              <em>Password:</em> 12345
            </li>
          </ul>
        </section>

        <LoginForm onLogin={handleLogin} />
      </section>

      {
        isLogged && <Navigate to={from ?? "/"}/>
      }
    </div>
  );
};

export default Login;
