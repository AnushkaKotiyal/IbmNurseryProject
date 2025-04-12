import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  return (
    <nav className="w-full bg-green-800 text-white px-3 py-2 flex items-center justify-between flex-wrap gap-2">
    {/* Left - Logo + Name */}
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => navigate("/")}
    >
      <img
        className="w-6 h-6 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-black"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgec9FBn6DmjMwz4DBsLL-VlLt_Zn1XvDqXXI3gMEzfga66W7yvx-mDLX5Gk15n2swhdc&usqp=CAU"
        alt="logo"
      />
      <div className="leading-tight">
        <h1 className="text-base sm:text-lg font-bold">Green Haven</h1>
        <p className="text-xs sm:text-xs">Grow Green, Live Better</p>
      </div>
    </div>
  
    {/* Center - Title */}
    <p className="text-lg sm:text-xl font-semibold text-center whitespace-nowrap mx-1">
      Welcome to Our Nursery
    </p>
  
    {/* Right - Cart */}
    <div
      className="relative cursor-pointer"
      onClick={() => navigate("/cart")}
    >
      <img
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
        src="https://img.icons8.com/?size=100&id=42382&format=png&color=FFFFFF"
        alt="Cart"
      />
      <span className="absolute top-0 right-0 bg-red-700 text-xs font-bold text-white rounded-full px-1.5 py-0.5">
        {cart}
      </span>
    </div>
  </nav>
  

  );
};

export default Navbar;
