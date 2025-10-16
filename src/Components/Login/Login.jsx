import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const { signIn, error, setError, signInWithgoogle } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result);
        navigate(location.state ? location.state.from : "/");
      })

      .catch((err) => {
        setError(" Incorrect Email or Password");
        console.log(err);
        toast.error("Login failed");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithgoogle()
      .then((result) => {
        console.log(result);
        navigate(location.state ? location.state.from : "/");
      })

      .catch((err) => {
        setError(" Incorrect Email or Password");

        toast.error("Login failed");
      });
  };

  return (
    <div>
      <div className=" my-4 bg-base-200 min-h-screen">
        <div className=" flex-col">
          <div className="text-center lg:text-center">
            <h1 className="text-2xl text-gray-500 my-4 font-bold">
              Login now!
            </h1>
          </div>
          <div className="card bg-base-100 max-w-80 mx-auto  shadow-2xl">
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
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-neutral mt-4"
              >
                Sign in with Google
              </button>
            </div>{" "}
            <p className="text-center">
              You don't have account?{" "}
              <Link to={"/register"} className="text-blue-800 font-bold underline">
                Register
              </Link>
            </p>
            {error && <p className="text-red-500 text-center py-1"> {error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
