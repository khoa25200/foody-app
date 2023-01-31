import { configureStore } from '@reduxjs/toolkit'
import mealReducer from './meal.reducer'
import cartReducer from './cart.reducer'



export const store = configureStore({
  reducer: {
    meal: mealReducer,
    cart: cartReducer
   }
})

// Lấy RootState và AppDispatch từ store của chúng ta
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
