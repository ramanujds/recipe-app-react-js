import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MealCard from './MealCard';
import { removeFavoriteMeal } from '../store/favoriteMealsSlice';

const FavoriteMeals = () => {

 // subscribe to the store

 const favoriteMeals = useSelector(store=>store.favoriteMeals.meals);

 const dispatch = useDispatch();

  const removeFromFavorite = (meal)=>{
    // code to dispatch an action to add meal to favorites
      dispatch(removeFavoriteMeal(meal));
  }

  return (
    <div className='row'>
      {favoriteMeals.map(meal=>(<MealCard meal={meal} btnText={'Remove'} favoriteUpdater={removeFromFavorite} />))}
    </div>
  )
}

export default FavoriteMeals
