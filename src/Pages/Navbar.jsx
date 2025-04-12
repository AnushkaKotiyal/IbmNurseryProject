import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  return (
    <nav className="w-full text-base bg-green-800 h-16 flex items-center justify-between text-white px-4">
  {/* Logo + Title */}
  <div onClick={() => navigate("/")} className="flex items-center gap-x-2 cursor-pointer">
    <img
      className="w-10 h-10 rounded-full object-contain border-black border-2"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgec9FBn6DmjMwz4DBsLL-VlLt_Zn1XvDqXXI3gMEzfga66W7yvx-mDLX5Gk15n2swhdc&usqp=CAU"
      alt="logo"
    />
    <div className="leading-tight">
      <h1 className="text-lg font-bold">Green Haven</h1>
      <p className="text-xs">Grow Green, Live Better</p>
    </div>
  </div>

  {/* Title in Center (optional on mobile) */}
  <div className="hidden sm:block text-lg font-semibold">
    Welcome to Our Nursery
  </div>

  {/* Cart */}
  <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
    <img
      className="w-8 h-8 object-cover"
      src="https://img.icons8.com/?size=100&id=42382&format=png&color=FFFFFF"
      alt="cart"
    />
    <p className="absolute -top-1 -right-1 bg-red-700 text-xs font-bold rounded-full px-1.5">
      {cart}
    </p>
  </div>
</nav>

  

  );
};

export default Navbar;
