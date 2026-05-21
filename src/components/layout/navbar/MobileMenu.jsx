import React from "react";
import useMenuStore from "../../../app/store/useMenuStore";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import navLinks from "../../../constants/navLinks";
import { NavLink } from "react-router-dom";
const MobileMenu = () => {
  const { isOpen, closeMenu, toggleMenu } = useMenuStore();

  return (
    <div className="lg:hidden relative">
      <button
        onClick={toggleMenu}
        className="fixed left-3 top-1/2 -translate-y-1/2 z-50"
      >
        {isOpen ? (
          <IoCloseOutline size={20} />
        ) : (
          <HiOutlineMenuAlt1 size={20} />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 left-0 flex flex-col h-screen w-full md:max-w-[400px] bg-white z-40 px-4">
            <ul className="flex flex-col items-start mt-14">
              {navLinks.map((item,index)=> {
                return(
                <li key={index}>
                  <NavLink
                    to={item.path}
                    onClick={closeMenu}
                    className={({
                      isActive,
                    }) => `text-[18px] font-normal
                           ${isActive ? "text-[#800020]" : "text-[#232323] "}`}
                  >
                    {item.name}
                  </NavLink>
                </li>
                );
              })}
            </ul>
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
