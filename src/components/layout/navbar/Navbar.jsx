import React, { memo } from "react";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import CartIcon from "./CartIcon";
import SearchIcon from "./SearchIcon";
import MobileMenu from "./MobileMenu";
import AuthIcon from "./AuthIcon";

const Navbar = memo(function Navbar({ isScrolled }) {
  return (
    <nav
      className={`fixed top-0 left-0 w-full
      px-4 md:px-8 lg:px-12 py-3 lg:py-5
      flex items-center justify-between
      z-50 backdrop-blur-lg transition-all duration-300
      ${isScrolled ? "shadow-md bg-white/70" : "bg-transparent"}`}
    >
      <div className="flex items-center gap-5 lg:gap-8">
        <MobileMenu />
        <Logo />
        <NavMenu />
      </div>
      <div className="flex items-center gap-4">
        <SearchIcon />
        <AuthIcon />
        <CartIcon />
      </div>
    </nav>
  );
});

export default Navbar;
