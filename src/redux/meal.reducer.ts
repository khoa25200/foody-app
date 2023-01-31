import { createReducer } from "@reduxjs/toolkit";
import { initialMealsList } from "constants/meals";
import { IMeal } from "types/product.type";


interface MealState {
  mealList: IMeal[]
}

const initialState: MealState = {
  mealList: initialMealsList,
};

const mealReducer = createReducer(initialState, (builder)=>{
    // builder.addCase(addCart,(state, action)=> {
    //     const cart = action.payload
    //     state.mealList.push(cart)
    //   })
})


export default mealReducer;

