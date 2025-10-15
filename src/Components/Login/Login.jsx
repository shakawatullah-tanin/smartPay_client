import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import {
  Navigate,
  useLocation,
  useNavigate,
} from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  // const navigation =useNavigation()

  const location = useLocation();

  console.log(location?.state?.from);
  const { signIn, error, setError,signInWithgoogle } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result);
        navigate(location.state.from ? location.state.from : "/");
      })

      .catch((err) => {
        setError(" Incorrect Email or Password");

        toast.error("Login failed");
      });
  };

  const handleGoogleSignIn =( ) =>{

    signInWithgoogle()
    .then((result) => {
        console.log(result);
        navigate(location.state.from ? location.state.from : "/");
      })

      .catch((err) => {
        setError(" Incorrect Email or Password");

        toast.error("Login failed");
      });

  }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin} className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>

               
              </form>
              <button onClick={handleGoogleSignIn} className="btn btn-neutral mt-4">Sign in with Google</button>

            </div> {error && <p className="text-red-500"> {error}</p>}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
