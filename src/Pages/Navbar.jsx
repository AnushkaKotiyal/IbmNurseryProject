import React from 'react'
import { useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
const Navbar = () => {
     const navigate = useNavigate();
     const cart=useSelector((state)=>state.cart.cart);
  return (
    <nav className="w-full text-lg bg-green-800 h-14 flex items-center justify-between text-white py-9 px-6">
    <div
      className="flex justify-between items-center gap-x-6 cursor-pointer"
      onClick={() => navigate("/")}
    >
      <img
        className="w-16 h-16 rounded-full object-contain border-black border-2"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgec9FBn6DmjMwz4DBsLL-VlLt_Zn1XvDqXXI3gMEzfga66W7yvx-mDLX5Gk15n2swhdc&usqp=CAU"
      />
      <div>
        <h1 className="text-3xl font-bold">Green Haven</h1>
        <p className="text-sm">Grow Green, Live Better</p>
      </div>
    </div>
    <div className="text-3xl font-bold">Welcome to Our Nursery</div>
    <div
      className="relative cursor-pointer"
      onClick={() => navigate("/cart")}
    >
      <img
        className="w-14 h-14 rounded-full object-cover"
        src='https://img.icons8.com/?size=100&id=42382&format=png&color=FFFFFF'
        alt="Cart"
      />
      <p className="absolute top-0 right-0 bg-red-800 text-white text-sm font-bold rounded-full px-2 py-1">
        {cart}
      </p>
    </div>
  </nav>
  )
}

export default Navbar;