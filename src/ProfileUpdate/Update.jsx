import React, { use } from "react";
import { AuthContext } from "../Components/Context/AuthContext";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router";

const Update = () => {

    const{user} = use(AuthContext)


  return <div>


    <div className="flex relative dropdown-menu my-20 gap-8 justify-center items-center   w-fit mx-auto common-shadow p-8 ">
        <div ><img className=" h-20 w-20 
        " src={user?.photoURL} alt="" />
        <div className=" top-8  absolute right-10 text-2xl">
            <Link to={"/updateProfile"}><FiEdit></FiEdit></Link>
        </div>
        </div>
       <div className="border-b py-6">
         <h1>Name :{user?.displayName}</h1>
         <p>Email:{user?.email}</p>
       </div>
        

    </div>



  </div>;
};

export default Update;
