import { configureStore } from '@reduxjs/toolkit';
import favoriteMealsReducer from './favoriteMealsSlice';


const appStore = configureStore({
    reducer: {
        favoriteMeals: favoriteMealsReducer,
    }
})

export default appStore;