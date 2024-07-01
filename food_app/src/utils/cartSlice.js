import { createSlice } from "@reduxjs/toolkit"


//we can create slice as shown below.......

const cartSlice = createSlice({


   name:'cart',

   initialState:{
    items:["burger,pizza"],
   },

   // reducers are used to modify the state


   reducers:{
    addItem:(state,action)=>{ // reducer function
    // we are mutating / modifying the state here
      
      state.items.push(action.payload)

    },

    removeItem:(state,action)=>{
      state.items.pop(action.payload)
    },

    clearCart : (state)=>{
      state.items = [];

    }

   }

})

export default cartSlice.reducer; // we are exporting reducer here


export const {addItem,removeItem, clearCart} = cartSlice.actions // this is how we export actions