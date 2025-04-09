import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, decrementByAmount } from "../Store/Slice";
import {
  addItem,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../Store/cartItemsSlice";
import PlantCard from "../Component/PlantCard";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const navigate = useNavigate();
  const totalAmount = cartItems.reduce((total, item) => {
    const price = Number(
      typeof item.price === "string"
        ? item.price.replace(/[^\d.]/g, "") 
        : item.price
    );
    const quantity = Number(item.quantity || 1);

    return total + price * quantity;
  }, 0);

  const handleSubTotal = () => {};
  const handleQuantityDelete = (plant) => {
    dispatch(decrementQuantity(plant));
    dispatch(decrement());
  };
  const handleQuantityIncrease = (plant) => {
    dispatch(incrementQuantity(plant));
    dispatch(increment());
  };
  const handleDelete = (plant) => {
    dispatch(decrementByAmount(plant.quantity));
    dispatch(removeFromCart(plant));
  };
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar />
      <div className="h-full w-full p-10 flex flex-col items-center bg-gray-50">
        <h1 className="font-extrabold text-4xl mb-6 text-green-700">
          Cart Items
        </h1>
        <h2>Total Amount: ₹{totalAmount.toFixed(2)}</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {cartItems.map((plant, index) => (
            <div
              key={index}
              className="w-64 h-auto bg-white p-4 shadow-lg rounded-xl flex flex-col items-center"
            >
              <h2 className="text-lg font-semibold mb-2 text-center">
                {plant.name}
              </h2>
              <img
                className="w-36 h-36 object-contain mb-2"
                src={plant.image}
                alt={plant.name}
              />
              <p className="text-red-600 font-semibold">{plant.price}</p>
              <p className="text-black font-semibold">Sub Total: ₹{plant.price.replace(/[^\d.]/g, "")*plant.quantity.toFixed(2)}</p>
              <p className="text-sm text-gray-600 text-center mb-4 line-clamp-2">
                {plant.desc}
              </p>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleQuantityIncrease(plant)}
                  className="bg-gray-400  w-6 h-6 rounded-md flex items-center justify-center text-xl hover:bg-green-600"
                >
                  +
                </button>

                <span className="text-lg font-medium">{plant.quantity}</span>

                <button
                  onClick={() => handleQuantityDelete(plant)}
                  className="bg-gray-400  w-6 h-6 rounded-md flex items-center justify-center text-xl hover:bg-red-600"
                >
                  −
                </button>
              </div>
              <button
                onClick={() => handleDelete(plant)}
                className="bg-red-500 text-white p-1 m-2 rounded-md"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between m-10 gap-y-4">
          <button
            className="bg-green-900 text-white p-3 rounded-md"
            onClick={() => navigate("/products")}
          >
            Continue Shopping
          </button>
          <button
            className="bg-green-900 text-white p-3 rounded-md"
            onClick={() => alert("checkout successfull")}
          >
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
