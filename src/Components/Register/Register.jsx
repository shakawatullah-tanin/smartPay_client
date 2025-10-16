import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser } = use(AuthContext);

  const navigate = useNavigate();

  const [showPassword,setShowPassword] =useState(false)

  console.log(createUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const url = e.target.photoUrl.value;

    console.log(name, email, password, url);

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters ot longer");
    } else if (!/[a-z]/.test(password)) {
      return toast.error(
        "Password must contain at least one uppercase letter."
      );
    } else if (!/[A-Z]/.test(password)) {
      return toast.error(
        "Password must contain at least one uppercase letter."
      );
    } else {
      return createUser(email, password)
        .then((result) => {
          console.log(result);

          navigate("/");
        })

        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-center">
            <h1 className="text-5xl font-bold">
              To Get Full Service ! Register Now
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card common-shadow bg-base-100 w-full max-w-sm shrink-0 ">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Name"
                  required
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                <label className="label">Photo Url</label>
                <input
                  type="url"
                  name="photoUrl"
                  className="input"
                  placeholder="Photo Url"
                  required
                />

                <label calassName="label">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input  relative"
                  name="password"
                  placeholder="Password"
                  required
                />
                <div className="absolute common-shodow  right-14 top-69">
                  <button type="button" className="cursor-pointer" onClick={()=>setShowPassword(!showPassword)}>
                    {
                      showPassword?<FaRegEye />:<FaRegEyeSlash />
                    }
                 
                  </button>
                </div>

                <button className="btn btn-neutral mt-4">Register</button>
                <div className="flex justify-center items-center">
                  <p>
                    Already SignUp?{" "}
                    <Link
                      to={"/login"}
                      className="text-blue-800 font-bold underline"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
