import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice/userSlice';
import restaurantSlice from './slice/restaurantSlice';
import restaurantMenuSlice from './slice/restaurantMenuSlice';



export const store = configureStore({
  reducer: {
    user: userSlice,
    restaurant:restaurantSlice,
    restaurantMenu:restaurantMenuSlice,
  },
})