import { createSlice } from "@reduxjs/toolkit";
export const cartItemsSlice=createSlice({
       name:"cartItems",
       initialState:{cartItems:[]},
       reducers:{
          addItem:(state,action)=>{
            const exists=state.cartItems.find((item)=>item.id===action.payload.id);
            if(!exists){
                state.cartItems.push({...action.payload,quantity:1});
            }
          },
          removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
          },    
          incrementQuantity: (state, action) => {
            const item = state.cartItems.find((i) => i.id === action.payload.id);
            if (item) {
              item.quantity += 1;
            }
          },
          decrementQuantity: (state, action) => {
            const item = state.cartItems.find((i) => i.id === action.payload.id);
            if (item && item.quantity > 0) {
              item.quantity -= 1;
            }
            else if(item.quantity==0) removeFromCart(item)
          }
          
       }
})
export const {addItem,removeFromCart,incrementQuantity,decrementQuantity} =cartItemsSlice.actions;
export default cartItemsSlice.reducer;