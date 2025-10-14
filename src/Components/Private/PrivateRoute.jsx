import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user,loading} =use(AuthContext)




    console.log(loading)


    if(loading){

        console.log(loading)
        return <div className=' h-screen flex flex-col justify-center items-center text-9xl w-full'><span className="loading loading-bars loading-xl"></span></div> 

    }

    if(!user){



        return <Navigate to={"/login"}></Navigate>
    }





    return (
       children
    
    );
};

export default PrivateRoute;