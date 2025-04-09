import React from 'react'
import cartReducer from './Slice'
import cartItemReducer from './cartItemsSlice'
import { configureStore } from '@reduxjs/toolkit'
//to maintain the cart state even after page reload
const loadFromLocalStorage=()=>{
    try{
      const cartState=localStorage.getItem('cartState');
      return cartState?JSON.parse(cartState):undefined
    }catch(error){
      return undefined;
    }
}
const saveToLocalStorage=(state)=>{
    try{
      localStorage.setItem('cartState',JSON.stringify(state));
    }catch(error){
        console.log(error);
    }
}
const store=configureStore(
    {
        reducer:{
            cart:cartReducer,
            cartItems:cartItemReducer
        },
        preloadedState:loadFromLocalStorage(),
    }
)

store.subscribe(()=>{
    saveToLocalStorage({
        cart:store.getState().cart,
        cartItems:store.getState().cartItems
    })
})

export default store;