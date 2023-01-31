import { createAction, createReducer } from "@reduxjs/toolkit";
import { ICart } from "types/cart.type";


interface cartState {
  cartList: ICart[]
}

const initialState: cartState = {
  cartList: []
};

export const addCart = createAction<ICart>('cart/addCart')

const cartReducer = createReducer(initialState, (builder)=>{
    builder.addCase(addCart,(state, action)=> {
        const cart = action.payload
        state.cartList.push(cart)
      })
})


export default cartReducer;

