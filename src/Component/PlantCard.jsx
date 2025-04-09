import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { increment, decrement } from "../Store/Slice";
import {addItem} from '../Store/cartItemsSlice'
const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const isInCart=cartItems.some((item)=>item.id===plant.id);
  const handleButton = () => {
    dispatch(increment());
    if(!isInCart)
      dispatch(addItem(plant));
  };
  return (
    <div className="w-60 h-80 bg-white p-2 shadow-2xl flex flex-col items-center">
      <h1 className="text-lg font-bold">{plant.name}</h1>
      <img className="w-40 h-40 object-contain" src={plant.image} />
      <p className="text-red-600">{plant.price}</p>
      <p className="line-clamp-2">{plant.desc}</p>
      <button
        onClick={handleButton}
        id="button"
        className={`p-2 w-40 h-10 rounded-md bg-green-800 text-white mt-2  ${isInCart ? ' pointer-events-none bg-gray-800' : 'bg-green-800'}`}  
      >
         {isInCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default PlantCard;
