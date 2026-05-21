import React from "react";
import useCartStore from "../../../app/store/useCartStore";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

export default function CartIcon() {
  const totalItems = useCartStore((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0),
  );

  return (
    <NavLink to="/checkout" className="relative">
      <HiOutlineShoppingBag size={20} className="cursor-pointer" />

      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
          {totalItems}
        </span>
      )}
    </NavLink>
  );
}
