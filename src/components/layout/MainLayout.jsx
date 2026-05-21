// MainLayout.jsx

import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";

export default function MainLayout() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // add event listener
    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar isScrolled={isScrolled} />

      <main className="pt-24">
        <Outlet />
      </main>
    </>
  );
}
