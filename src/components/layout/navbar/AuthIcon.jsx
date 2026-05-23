import React from "react";
import { NavLink } from "react-router-dom";
import { LuUser } from "react-icons/lu";
export default function AuthIcon(){
    return(
    <NavLink to="/login">
    <LuUser size={20} className="cursor-pointer"/>
    </NavLink>
    );
}