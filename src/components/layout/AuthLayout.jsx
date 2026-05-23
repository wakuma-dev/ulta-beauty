import React from "react";
import { Outlet } from "react-router-dom";
export default function AuthLayout(){
    return(
       <div className="w-full h-screen lg:min-h-screen bg-white">
        <Outlet />
       </div>   
    );
}