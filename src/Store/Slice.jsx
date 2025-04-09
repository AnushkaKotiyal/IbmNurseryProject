import React from 'react'
import {createSlice} from '@reduxjs/toolkit'
export const cartSlice = createSlice({
     name:'cart',
     initialState:{cart:0},
     reducers: {
        increment: (state) => {
          state.cart += 1;
        },
        decrement: (state) => {
         { state.cart>0?
          state.cart -= 1:undefined}
        },
        decrementByAmount: (state, action) => {
            const amount=Number(action.payload);
            state.cart -= amount;
        },          
    }
      
});
export const {increment,decrement,decrementByAmount}=cartSlice.actions;
export default cartSlice.reducer;
