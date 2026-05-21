import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../../../constants/navLinks";

export default function NavMenu() {
  return (
    <div className="hidden lg:flex items-center gap-5">
      <ul className="flex items-center gap-8">
        {navLinks.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({
                  isActive,
                }) => `relative after:absolute after:-bottom-1
                                      after:left-0 after:w-0 after:h-[1px] after:transition-all 
                                      after:duration-150 after:bg-[#232323] hover:after:w-full text-[16px] leading-[20px]
                                       font-normal text-[#232323]
                                       ${isActive ? "text-[#800020]" : ""}`}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
