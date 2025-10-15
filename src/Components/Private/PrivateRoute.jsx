import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation,  } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user,loading} =use(AuthContext)


    const location = useLocation()

    console.log(location)



    if(loading){

        console.log(loading)
        return <div className=' h-screen flex flex-col justify-center items-center text-9xl w-full'><span className="loading loading-bars loading-xl"></span></div> 

    }

    if(!user){



        return <Navigate to={"/login"} state={{ from: location.pathname }} replace  ></Navigate>
    }





    return (
       children
    
    );
};

export default PrivateRoute;