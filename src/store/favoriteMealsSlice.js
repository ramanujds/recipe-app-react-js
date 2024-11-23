import { createSlice } from "@reduxjs/toolkit";

const FavoriteMealsSlice = createSlice({
    name: 'favoriteMeals',
    initialState: {
        meals: [
            {
                "idMeal": "52874",
                "strMeal": "Chicken Handi",
                "strMealThumb": "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
            },
            {
                "idMeal": "53026",
                "strMeal": "Chicken Karaage",
                "strMealThumb": "https://www.themealdb.com/images/media/meals/tyywsw1505930373.jpg",
            }
        ],
    },
    reducers: {
        addFavoriteMeal: (state, action) => {
            state.meals.push(action.payload);
        },
        removeFavoriteMeal: (state, action) => {
            const index = state.meals.findIndex(meal => meal.idMeal === action.payload.idMeal);
            state.meals.splice(index, 1);
        },
        clearAllFavoriteMeals: (state, action) => {
            state.meals.length = 0;
        },

    }
}
)

export const { addFavoriteMeal, removeFavoriteMeal, clearAllFavoriteMeals } = FavoriteMealsSlice.actions;

export default FavoriteMealsSlice.reducer;

