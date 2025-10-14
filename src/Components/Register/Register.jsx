import React, { use } from "react";
import { Link} from "react-router";
import { AuthContext } from "../Context/AuthContext";


const Register = () => {

  const {createUser} =use(AuthContext)


  console.log(createUser)






  const handleSubmit = (e) =>{

    e.preventDefault()

    const name = e.target.name.value;
    const  email =e.target.email.value;
    const password =e.target.password.value;

    const url =e.target.photoUrl.value


    console.log(name,email,password,url)


    createUser(email,password)
    .then(result=>console.log(result))

    .catch(error=>console.log(error))

  }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-center">
            <h1 className="text-5xl font-bold">To Get Full Service ! Register Now</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="fieldset">
                <label className="label">Name</label>
                <input type="text" className="input" name="name" placeholder="Name" />
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                 <label className="label">Photo Url</label>
                <input type="url" name="photoUrl" className="input" placeholder="Photo Url" />
       
                <label calassName="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                />

                <button className="btn btn-neutral mt-4">Register</button>
                <div className="flex justify-center items-center">
                  <p className="">Already SignUp? <Link to={"/login"} className="text-blue-800 font-bold underline">
                    Login
                  </Link></p>
                  
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
